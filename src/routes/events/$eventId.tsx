import { createFileRoute, notFound } from "@tanstack/react-router";
import { eventDb, type Event } from "@/lib/event-data";
import { AnimatedStat } from "@/components/AnimatedStat";
// import Header from "@/components/Header"; // Header Section to uncomment when header is ready
// import Footer from "@/components/Footer"; // Footer Section to uncomment when footer is ready

// This creates the dynamic route /events/$eventId
// We add a 'loader' to fetch data before the component renders
// Data is fetched from lib/event-data.tsx
export const Route = createFileRoute("/events/$eventId")({
	loader: ({ params }) => {
		const { eventId } = params;
		// Find event by its ID from event-data.tsx
		const event = eventDb[eventId];
		if (!event) {
			throw notFound();
		}
		return event;
	},
	// Compoenent to render when this route is matched (See below)
	component: EventDetailComponent,
});

// Main component 
function EventDetailComponent() {
	const event = Route.useLoaderData();
	return (
		<div className="bg-background text-foreground min-h-screen py-6">
            {/* <Header /> */} {/* Header Section to uncomment when header is ready */}
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/*Mian Event Picture*/}
				<div className="mb-8">
					<img
						src={event.mainImage}
						alt={event.name}
						className="w-full h-[300px] md:h-[550px] object-cover rounded-xl shadow-lg"
					/>
				</div>

				{/*Event Info*/}
				<div className="text-center mb-10">
					<h1 className="text-3xl md:text-5xl font-extrabold mb-3 tracking-tight">
						{event.name}
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground">
						{event.details}
					</p>
				</div>

				{/* Event Report*/}
				<div className="max-w-4xl mx-auto mb-12">
					<p className="text-base md:text-lg text-left leading-relaxed whitespace-pre-line">
						{event.report}
					</p>
                {/* Hashtags Section*/}
                {/*Render hashtags only if list has items in event-data.tsx*/}
                {event.tags && event.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {/* Map over the tags array and render a span for each tag */}
                        {event.tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-muted text-muted-foreground text-xs font-semibold px-2.5 py-0.5 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
				</div>

				{/* Sponsor and Stats Grid*/}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
					{/* Sponsor Details */}
					<div className="relative w-full h-60 md:h-72 border border-border rounded-lg overflow-hidden shadow-lg group">
						<img
							src={event.sponsorImage}
							alt="Sponsor details"
							className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
							<h2 className="text-white text-2xl md:text-3xl font-bold">
								Sponsor details
							</h2>
						</div>
					</div>

                    {/* Stats Box */}
					<div className="relative w-full h-60 md:h-72 border border-border rounded-lg overflow-hidden shadow-lg group">
						<img
							src={event.statsImage}
							alt="Stats"
							className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
							<h2 className="text-white text-2xl md:text-3xl font-bold">
								STATS
							</h2>
						</div>
					</div>
				</div>
                
                {/* Event Photos Gride */}
				<div>
					<h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
						MORE EVENT PHOTOS
					</h3>

                    {/* Conditional rendering based on number of photos in event-data.tsx */}
                    {/* Considers 4 cases: 1 photo, 2 photos, 3 photos and 4 photos only. No other cases */}
                    
					{(() => {
						const numPhotos = event.gallery.length;
						const photos = event.gallery;

						const imgClasses =
							"w-full h-32 md:h-48 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105";
                        
						// Case 1: 1 Photo (Centered)
						if (numPhotos === 1) {
							return (
								<div className="flex justify-center">
									<div className="w-full max-w-2xl">
										<img
											key={0}
											src={photos[0]}
											alt={`${event.name} photo 1`}
											className={imgClasses}/>
									</div>
								</div>
							);
						}

						// Case 2: 2 Photos (Side-by-side)
						if (numPhotos === 2) {
							return (
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
									<img
										key={0}
										src={photos[0]}
										alt={`${event.name} photo 1`}
										className={imgClasses}/>
									<img
										key={1}
										src={photos[1]}
										alt={`${event.name} photo 2`}
										className={imgClasses}/>
								</div>
							);
						}

						// Case 3: 3 Photos (2 on top, 1 centered below)
						if (numPhotos === 3) {
							return (
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
									<img
										key={0}
										src={photos[0]}
										alt={`${event.name} photo 1`}
										className={imgClasses}/>
									<img
										key={1}
										src={photos[1]}
										alt={`${event.name} photo 2`}
										className={imgClasses}/>
									<div className="sm:col-span-2 flex justify-center">
										<div className="w-full sm:w-1/2">
											<img
												key={2}
												src={photos[2]}
												alt={`${event.name} photo 3`}
												className={imgClasses}/>
										</div>
									</div>
								</div>
							);
						}

						// Case 4: 4 Photos (2x2 Grid)
						if (numPhotos >= 4) {
							return (
								<div className="grid grid-cols-2 gap-4 md:gap-6">
									{photos.slice(0, 4).map((imgSrc, index) => (
										<img
											key={index}
											src={imgSrc}
											alt={`${event.name} photo ${index + 1}`}
											className={imgClasses}
										/>
									))}
								</div>
							);
						}

						// Case 0: No photos
						return null;
					})()}
				</div>
			</div>
        {/* <Footer /> */} {/* Footer Section to uncomment when footer is ready */}
		</div>
	);
}
