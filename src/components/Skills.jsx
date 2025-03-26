import { FaBootstrap, FaCss3, FaHtml5, FaJava, FaJs, FaNodeJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiCplusplus, SiRedux, SiNextdotjs, SiNetlify } from "react-icons/si";

const skills = [
    { id: 1, name: 'HTML', icon: <FaHtml5 color='#DD4B25' aria-label="HTML icon" /> },
    { id: 2, name: 'CSS', icon: <FaCss3 color='#1771B5' aria-label="CSS icon" /> },
    { id: 3, name: 'JavaScript', icon: <FaJs color='#E8D44D' aria-label="JavaScript icon" /> },
    { id: 4, name: 'React', icon: <FaReact color='#00D1F7' aria-label="React icon" /> },
    { id: 5, name: 'Bootstrap', icon: <FaBootstrap color='#7910F2' aria-label="Bootstrap icon" /> },
    { id: 6, name: 'TailwindCSS', icon: <RiTailwindCssFill color='#36B7F0' aria-label="TailwindCSS icon" /> },
    { id: 7, name: 'Node.js', icon: <FaNodeJs color='green' aria-label="Node.js icon" /> },
    { id: 8, name: 'MongoDB', icon: <DiMongodb color='#00E661' aria-label="MongoDB icon" /> },
    { id: 9, name: 'C++', icon: <SiCplusplus color='#017CC7' aria-label="C++ icon" /> },
    { id: 10, name: 'Java', icon: <FaJava color='#E51F24' aria-label="Java icon" /> },
    { id: 11, name: 'Git', icon: <FaGitAlt color='#E84D31' aria-label="Git icon" /> },

    { id: 12, name: 'Redux', icon: <SiRedux color='#764ABC' aria-label="Redux icon" /> },

    { id: 13, name: 'Next.js', icon: <SiNextdotjs color='black' aria-label="Next.js icon" /> },
    { id: 14, name: 'Github', icon: <FaGithub color='black' aria-label="Github icon" /> },
    { id: 15, name: 'Netlify', icon: <SiNetlify color='#36A9B5' aria-label="Netlify icon" /> },


];


const Skills = () => {
    return (
       
            <div className="grid md:grid-cols-4 grid-cols-3 w-full max-w-6xl  lg:p-10 p-5">
                {
                    skills.map((skill) => {
                        return <div key={skill.id} className=" my-5 relative group">
                            <div className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gray-800  rounded-lg right-14 -top-6 px-3 py-1 text-sm">
                                {skill.name}
                            </div>
                            <div className="w-fit mx-auto bg-gray-800/70 shadow-xl rounded-xl p-3 cursor-pointer">
                                <span className="text-5xl">{skill.icon}</span>
                            </div>
                        </div>
                    })
                }
            </div>
        
    )
}

export default Skills
