import Contact from "@/components/Contact";
import Heading from "@/components/Heading";
import { Toaster } from "react-hot-toast";
export const metadata = {
  title: "Contact | Ankit Jha - Full Stack Developer",
  description:
    "Get in touch with Ankit Jha for web development projects, collaborations, or queries. Contact me via email or social media.",
  keywords:
    "Contact Ankit Jha, Full Stack Developer, Web Development, Freelance Developer",
  authors: [{ name: "Ankit Jha", url: "https://ankitjha.vercel.app" }],
  robots: "index, follow",
  openGraph: {
    title: "Contact | Ankit Jha - Full Stack Developer",
    description:
      "Get in touch with Ankit Jha for web development projects, collaborations, or queries.",
    url: "https://ankitjha.vercel.app/contact",
    siteName: "Ankit Jha Portfolio",
    type: "website",
  },
};

const ContactPage = () => {
  return (
    <div className="h-screen w-full relative flex items-center justify-center">
      <Toaster />
      <Heading text={"Contact Me"} />
      <Contact />
    </div>
  );
};

export default ContactPage;
