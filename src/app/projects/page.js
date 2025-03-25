import Projects from "@/components/Projects";

export const metadata = {
    title: "Projects | Ankit Jha - Full Stack Developer",
    description:
      "Explore the projects built by Ankit Jha, a Full Stack Developer. Check out MealMate, BeatBox, Medium Clone, and MakeMyTrip, all built using modern web technologies.",
    keywords:
      "Ankit Jha, Full Stack Developer, Web Development, React, MERN Stack, Projects, MealMate, BeatBox, Medium Clone, MakeMyTrip",
    authors: [{ name: "Ankit Jha", url: "https://ankitjha.vercel.app" }],
    openGraph: {
      title: "Projects | Ankit Jha - Full Stack Developer",
      description:
        "Discover projects built by Ankit Jha using React, Node.js, MongoDB, and TailwindCSS. Explore MealMate, BeatBox, Medium Clone, and MakeMyTrip.",
      url: "https://ankitjha.vercel.app/projects",
      type: "website",
     
    },
   
  };

export default function ProjectPage(){
    return (
        <>
        <Projects/>
        </>
    )
}