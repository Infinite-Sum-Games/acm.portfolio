import { createFileRoute } from "@tanstack/react-router";
import Card from "@/components/team/Card";
import { Faculty } from "@/lib/team-details";

export const Route = createFileRoute("/team/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<section className="flex flex-col justify-center items-center gap-5">
			<section className="w-full h-fit pt-10 flex flex-col items-center justify-center">
				<section className="flex flex-col justify-center items-center gap-7">
					<p className="text-3xl font-sans font-bold">Our Guides & Mentors</p>

					<div className="grid grid-cols-3 justify-center items-center gap-7">
						{Faculty.map((faculty, idx) => (
							<Card key={idx} person={faculty} type="large" />
						))}
					</div>
				</section>
			</section>
		</section>
	);
}
