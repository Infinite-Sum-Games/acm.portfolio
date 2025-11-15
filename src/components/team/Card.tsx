import { Calendar } from "lucide-react";
import type { Person } from "@/lib/team-details";

export default function Card(props: {
	person: Person;
	type: "large" | "small";
}) {
	const { name, title, photo, social, date } = props.person;
	const type = props.type;

	return (
		<a
			href={social}
			target="_blank"
			className="w-70 h-80 border flex flex-col select-none items-center rounded-2xl overflow-hidden relative hover:shadow-xl transition-all ease-in-out duration-500"
		>
			<div className="w-full h-full overflow-hidden pointer-events-none">
				<img className="w-full h-full object-cover" src={photo} alt={name} />
			</div>

			<div className="flex gap-2 items-center absolute top-2 left-2 z-50 bg-pink-800 rounded-4xl text-white px-2 py-1">
				<Calendar size={15} color="#ffffff" />
				{date && <p className="text-[0.7rem] font-bold font-sans">{date}</p>}
			</div>

			<div
				className={`flex justify-center px-5 items-center w-[92%] h-15 bg-white shadow-2xl absolute bottom-3 rounded-xl`}
			>
				<span className="text-center">
					<p className="text-[0.95rem] leading-tight font-sans font-bold text-black">
						{name}
					</p>
					<p className="text-[0.8rem] font-sans text-black/50 font-bold">
						{title}
					</p>
				</span>
			</div>
		</a>
	);
}
