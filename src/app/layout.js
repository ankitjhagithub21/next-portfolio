import "./globals.css";
import Menu from "@/components/Menu";

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
    "SEO Optimization",
  ],
  openGraph: {
    title: "Ankit Jha | Full Stack Developer & Freelancer",
    description:
      "I create high-performance, scalable, and SEO-friendly web applications using React, Next.js, and Node.js.",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <main className="h-screen w-full relative overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-100">
          <Menu />
          {children}
        </main>
      </body>
    </html>
  );
}
