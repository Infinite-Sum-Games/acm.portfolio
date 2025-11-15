export type Person = {
	name: string;
	title: string;
	photo: string;
	social: string;
	date: string | null;
};

export const Faculty: Person[] = [
	{
		name: "Bindu K. R.",
		title: "Assistant Professor",
		photo:
			"https://webfiles.amrita.edu/2014/02/ykW7LbNk-Bindu-K-R_asst-professor_cse_engineering_coimbatore.jpg",
		social: "https://www.amrita.edu/faculty/bindu-k-r/",
		date: "2020 - Present",
	},

	{
		name: "Dr. Aarthi R.",
		title: "Assistant Professor (Sl.Gd.)",
		photo:
			"https://webfiles.amrita.edu/2014/02/Aarthi-R_asst-professor_cse_engineering_coimbatore.jpg",
		social: "https://www.amrita.edu/faculty/r-aarthi/",
		date: "2020 - Present",
	},
	{
		name: "Dr. Anuragi Arti Narayandas",
		title: "Assistant Professor",
		photo:
			"https://webfiles.amrita.edu/2024/07/arti-anuragi-asst-computing-coimbatore.jpg",
		social: "https://www.amrita.edu/faculty/anuragi-arti-narayandas/",
		date: "2022 - Present",
	},
];
