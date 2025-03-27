import SocialMedia from "@/components/SocialMedia";
import TypeWriter from "@/components/TypeWriter";
import Image from "next/image";

export const metadata = {
  title: "Ankit Jha | Full Stack Developer & Freelancer",
  description:
    "I am a Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. I create high-performance, scalable, and SEO-friendly web applications. Let's build something amazing together!",
  keywords: [
    "Ankit Jha",
    "Full Stack Developer",
    "Freelancer",
    "Web Developer",
    "React Developer",
    "Next.js",
    "MERN Stack",
    "MCA Student",
    "Portfolio",
    "Ankit Jha Portfolio",
    "Ankit Portfolio"
  ],
  openGraph: {
    title: "Ankit Jha | Full Stack Developer & Freelancer",
    description:
      "I create high-performance, scalable, and SEO-friendly web applications using React, Next.js, and Node.js.",
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
              I&apos;m{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Ankit Jha
              </span>
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
