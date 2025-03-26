import SocialMedia from "@/components/SocialMedia";
import TypeWriter from "@/components/TypeWriter";
import Image from "next/image";

export const metadata = {
  title: "Ankit Jha - Portfolio",
  description: "As a passionate Full Stack Developer and Freelancer, I specialize in creating high-performance web applications using React, Next.js, Node.js, and MongoDB. With a strong foundation in front-end and back-end development, I craft scalable, secure, and user-friendly solutions that enhance digital experiences. I am currently pursuing a Master of Computer Applications (MCA) and have a keen interest in modern web technologies, UI/UX design, and API development. My expertise includes building dynamic websites, e-commerce platforms, dashboards, and portfolio websites with optimized performance and SEO. As a freelancer, I collaborate with businesses and individuals to develop custom web solutions that meet their unique needs. From responsive designs to secure payment integrations, I ensure that every project delivers exceptional performance and functionality. I also enjoy sharing my knowledge through technical blogs and open-source contributions. Whether you need a full-fledged web application, a custom website, or technical consultation, I am always eager to take on exciting challenges. Explore my portfolio to see my work, projects, and expertise in modern web development. Let’s build something amazing together! 🚀",
  keywords: [
    "Ankit Jha",
    "MCA Student",
    "Full Stack Developer",
    "Freelancer",
    "Web Developer",
    "React",
    "Next.js",
  ],
  openGraph: {
    title: "Ankit Jha | Full Stack Developer & Freelancer",
    description: "As a passionate Full Stack Developer and Freelancer, I specialize in creating high-performance web applications using React, Next.js, Node.js, and MongoDB. With a strong foundation in front-end and back-end development, I craft scalable, secure, and user-friendly solutions that enhance digital experiences. I am currently pursuing a Master of Computer Applications (MCA) and have a keen interest in modern web technologies, UI/UX design, and API development. My expertise includes building dynamic websites, e-commerce platforms, dashboards, and portfolio websites with optimized performance and SEO. As a freelancer, I collaborate with businesses and individuals to develop custom web solutions that meet their unique needs. From responsive designs to secure payment integrations, I ensure that every project delivers exceptional performance and functionality. I also enjoy sharing my knowledge through technical blogs and open-source contributions. Whether you need a full-fledged web application, a custom website, or technical consultation, I am always eager to take on exciting challenges. Explore my portfolio to see my work, projects, and expertise in modern web development. Let’s build something amazing together! ",
  },
  
};

export default function HomePage() {
  return (
   <section className="min-h-screen w-full flex items-center justify-center">
     <div className="flex lg:flex-row flex-col  items-center justify-center gap-5 lg:gap-24 w-full max-w-6xl">
      
       {/* left Content - Profile Image */}
      
       <div className="relative w-[150px] md:w-[200px] lg:w-[250px] group">
          {/* Profile Image */}
          <Image
            src="/ankit.png"
            alt="Ankit Jha Profile Image"
            width={300}
            height={300}
            className="rounded-full shadow-lg transition-transform duration-300 transform border border-gray-400 group-hover:scale-105"
          />
       
        </div>

      {/* right Content */}
      <div className="flex flex-col gap-6 text-center lg:text-left">
        <div>
          <p className="text-xl md:text-2xl hidden lg:flex items-center justify-center text-center lg:justify-start gap-2 font-serif tracking-wider">
            Hello and Welcome
            <Image src="/hi.gif" alt="Hi Icon" width={30} height={30} />
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
            I&apos;m <span className="text-blue-600 dark:text-blue-400">Ankit Jha</span>
          </h1>
          <TypeWriter />
        </div>

        {/* Social Media Links */}
       
          <SocialMedia />
        
      </div>

     
     
    </div>
   </section>
  );
}