import Heading from "@/components/Heading";
import Skills from "@/components/Skills";

export const metadata = {
  title: "Skills | Ankit Jha - Full Stack Developer",
  description:
    "Explore the technical skills of Ankit Jha, a Full Stack Developer proficient in React, Node.js, MongoDB, TailwindCSS, and more.",
  keywords:
    "Ankit Jha, Skills, Full Stack Developer, Web Development, React, Node.js, MongoDB, JavaScript, TailwindCSS",
  authors: [{ name: "Ankit Jha", url: "https://ankitjha.vercel.app" }],
  openGraph: {
    title: "Skills | Ankit Jha - Full Stack Developer",
    description:
      "Discover the technical expertise of Ankit Jha, a Full Stack Developer skilled in modern web technologies.",
    
  },
 
 
};

const SkillPage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center relative">
      <Heading text={"My Skills"}/>
      <Skills />
    </div>
  );
};

export default SkillPage;
