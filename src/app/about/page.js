

export const metadata = {
  title: "About Ankit Jha - Full Stack Developer & Freelancer",
  description: "Learn more about Ankit Jha, an MCA student, Full Stack Developer, and Freelancer specializing in the MERN stack. Explore his skills and experience.",
  keywords: ['Ankit Jha', 'About', 'Full Stack Developer', 'Freelancer', 'MCA Student', 'MERN Stack', 'Web Development', 'Resume'],
  openGraph: {
    title: "About Ankit Jha - Full Stack Developer & Freelancer",
    description: "Learn more about Ankit Jha, an MCA student, Full Stack Developer, and Freelancer specializing in the MERN stack. Explore his skills and experience.",
  },
};

export default function AboutPage() {
  return (   
      
      <div className="min-h-screen w-full flex items-center justify-start">
        <div className="max-w-6xl w-full p-10">
     
          <h1 className="lg:text-8xl text-5xl uppercase font-bold mb-5">WHO I&apos;M</h1>
          <p className="font-serif leading-relaxed tracking-wide text-xl mb-5">
            I am Ankit Jha, originally from Bihar, India, and currently pursuing a Master of Computer Applications (MCA) at RGPV University. With a strong focus on web development, I specialize in building robust web applications using the MERN stack. I am actively seeking opportunities in the web development field to further enhance my skills and contribute to cutting-edge projects.
          </p>
          <button className="font-serif border-b-2 border-green-600 pb-2 cursor-pointer">
            My Resume
          </button>
        </div>
      </div>
    
  );
}