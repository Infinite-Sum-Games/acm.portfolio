// Define the structure for a single event
export type Event = {
	name: string;
	details: string;
	report: string;
	mainImage: string;
	sponsorImage: string;
	statsImage: string;
	gallery: string[];
    tags: string[];
};

// A simple utility to create URL-friendly IDs from event names
const slugify = (text: string) => {
	return text
		.toLowerCase() // Convert to lowercase
        .trim() // Remove whitespace from both ends
		.replace(/\s+/g, "-") // Replace spaces with dashes
		.replace(/[^\w-]+/g, ""); // Remove all non-word chars
};

// Each event is stored here with its name(slug) as the key
export const eventDb: Record<string, Event> = {
	"acm-student-chapter-induction-2023": {
		name: "ACM Student Chapter Induction", //events/acm-student-chapter-induction-2023 is route
		details: "17 October, 2023 Held on Microsoft Teams Online.",
		report:
			"The ACM Student Chapter in association with the Department of Computer Science and Engineering conducted the Induction program for all students across the different departments. Around 220 students attended the session.",
		mainImage: "temp.jpg",
		sponsorImage: "temp.jpg",
		statsImage: "temp.jpg",
		gallery: ["temp.jpg", "temp.jpg","temp.jpg","temp.jpg"],
        tags: [],
	},
	"hack-101": {
		name: "Hack 101", //events/hack-101 url is the route
		details: "March 2025. A 12-hour hackathon.",
		report:
			"The CS101 series of events ended with a bang that was the Hack101 event. Hack 101 was a 12-hour hackathon where participants flexed the skills they learnt in the workshops leading up to the event. The hackathon was completely open and participants built a wide variety of projects on a wide range of topics from 2D platformers to movie recommendation systems. The winners were awarded with cash prizes and certificates. ",
		mainImage: "temp.jpg",
		sponsorImage: "temp.jpg",
		statsImage: "temp.jpg",
		gallery: ["temp.jpg", "temp.jpg", "temp.jpg", "temp.jpg"],
        tags: ["#Hack101","#CS101","#ACM","#Amrita"],

	},
	"langchain-101": {
		name: "Langchain 101", //events/langchain-101 url is the route
		details: "Feb 2025. Part of the CS101 series.",
		report:
			"Langchain 101 was the second workshop in the CS101 series, with partcipants diving headfirst into incorporating LLMs into their applications. Participants built chatbots using Langchain and fine-tuned them to get accurate responses.",
		mainImage: "temp.jpg",
		sponsorImage: "temp.jpg",
		statsImage: "temp.jpg",
		gallery: ["temp.jpg", "temp.jpg", "temp.jpg", "temp.jpg"],
        tags: ["#Langchain101","#CS101","#ACM","#Amrita","#LLM","#Chatbots"],
	},
	"webdev-101": {
		name: "Webdev 101", //events/webdev-101 url is the route
		details: "Feb 2025. Start of the CS101 series.",
		report:
			"Webdev 101 marked the start of the CS101 series of events for 2024-25. The workshop provided a holistic introduction to web development with a good mix of hands-on and theory. Pariticpants learnt the ins and outs of modern frontend development frameworks like React by building a todo app and a login page, complete with backend integration.",
		mainImage: "temp.jpg",
		sponsorImage: "temp.jpg",
		statsImage: "temp.jpg",
		gallery: ["temp.jpg", "temp.jpg", "temp.jpg", "temp.jpg"],
        tags: ["#Webdev101","#CS101","#ACM","#Amrita"],
	},
	"winter-of-code-2024-25": {
		name: "Winter of Code @ ACM Amrita 2024-25", //events/winter-of-code-2024-25 url is the route
		details: "Dec 2024. View leaderboard at woc-leaderboard.vercel.app",
		report:
			"The Winter of Code is complete at ACM Amrita! With over 270+ participants, this open-source coding challenge was a grand success. Developers contributed to a range of exciting projects, collaborating, and pushed their skills to new heights. The leaderboard is live at the link above. Congrats to the winners and all participants!",
		mainImage: "temp.jpg",
		sponsorImage: "temp.jpg",
		statsImage: "temp.jpg",
		gallery: ["temp.jpg", "temp.jpg", "temp.jpg", "temp.jpg"],
        tags: ["#WinterOfCode","#ACM","#Amrita","#OpenSource"],
	},
	"acm-student-chapter-induction-2024": {
		name: "ACM Student Chapter Induction", //events/acm-student-chapter-induction-2024 is route
		details: "September 12th, 2024.",
		report:
			"The ACM Club at Amrita Vishwa Vidyapeetham, Coimbatore, successfully hosted its Induction event. Esteemed speakers Siddarth Kengadaran and Dr. Sridhar Chimalakonda provided valuable insights into the tech world. Siddarth emphasized the importance of community involvement in fostering growth and development, while Dr. Sridhar discussed the transformative potential of AI in software engineering.",
		mainImage: "temp.jpg",
		sponsorImage: "temp.jpg",
		statsImage: "temp.jpg",
		gallery: ["temp.jpg", "temp.jpg", "temp.jpg", "temp.jpg"],
        tags: ["#ACM","#Induction","#Amrita","#Tech","#Community"],
	},
	"backend-development-workshop": {
		name: "Backend Development Workshop", //events/backend-development-workshop is route
		details: "Jul 2024. Start of 2024-25 technical workshops.",
		report:
			"The ACM Student Club at Amrita Coimbatore kicked off technical workshops for the year 2024-25 with a workshop on backend development fundamentals. Participants were introduced to the concepts of backend development such as APIs and MVC models. The workshop was completely hands-on with participants building CRUD APIs using Express.js and Node.js and testing them using Postman. #ACM #Workshop #BackendDevelopment #ExpressJS #NodeJS #Postman",
		mainImage: "temp.jpg",
		sponsorImage: "temp.jpg",
		statsImage: "temp.jpg",
		gallery: ["temp.jpg", "temp.jpg", "temp.jpg", "temp.jpg"],
        tags: ["#BackendDevelopment","#ACM","#ExpressJS","#NodeJS","#Postman","#Workshop"],
	},
	"generative-ai-workshop": {
		name: "Generative AI Workshop", //events/generative-ai-workshop is route
		details: "Jul 2025. Conducted by Ms. Smitha Mave, Google.",
		report:
			"ACM Amrita successfully organised a Generative AI workshop with 60+ attendees. Participants explored key Gen AI tools including ChatGPT and Gemini, applying them to real-world coding, academic writing, and research challenges. The session delivered comprehensive prompt engineering training and reinforced ethical AI practices.",
		mainImage: "temp.jpg",
		sponsorImage: "temp.jpg",
		statsImage: "temp.jpg",
		gallery: ["temp.jpg", "temp.jpg", "temp.jpg", "temp.jpg"],
        tags: ["#GenerativeAI","#ChatGPT","#Gemini","#PromptEngineering","#Google"],
	},
	"how-to-win-a-hackathon": {
		name: "How to Win a Hackathon", //events/how-to-win-a-hackathon is route
		details: "Jul 2025. 80+ participants.",
		report:
			"How to Win a Hackathon was a comprehensive hackathon mastery workshop, equipping students with winning strategies. Participants gained expertise in team formation, problem selection, idea validation, and crucial storytelling techniques. The session featured live ideation challenges and hands-on demonstrations of Generative AI, Agentic AI, and low-code tools.",
		mainImage: "temp.jpg",
		sponsorImage: "temp.jpg",
		statsImage: "temp.jpg",
		gallery: ["temp.jpg", "temp.jpg", "temp.jpg", "temp.jpg"],
        tags: ["#Hackathon","#TeamFormation","#AITools","#Ideation","#TechStack"],
	},
	"git-github-foundations-workshop": {
		name: "Git & GitHub Foundations Workshop", //events/git-github-foundations-workshop is route
		details: "Jul 2025. Start of 2025-26 season. 250+ participants.",
		report:
			"The hands-on Git & GitHub foundations workshop officially kicked off the 2025-26 season here at ACM Amrita. It brought over 250+ participants. Participants mastered repository management, version control workflows, branching strategies, and collaborative development practices. The workshop wrapped up with live PR demonstrations and comprehensive open source collaboration guidance.",
		mainImage: "temp.jpg",
		sponsorImage: "temp.jpg",
		statsImage: "temp.jpg",
		gallery: ["temp.jpg", "temp.jpg", "temp.jpg", "temp.jpg"],
        tags: ["#Git","#GitHub","#VersionControl","#OpenSource","#Collaboration"],
	},
};
