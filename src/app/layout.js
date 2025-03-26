import "./globals.css";
import Menu from "@/components/Menu";

export const metadata = {
  title: "Ankit Jha - Portfolio",
  description:
    "As a passionate Full Stack Developer and Freelancer, I specialize in creating high-performance web applications using React, Next.js, Node.js, and MongoDB. With a strong foundation in front-end and back-end development, I craft scalable, secure, and user-friendly solutions that enhance digital experiences. I am currently pursuing a Master of Computer Applications (MCA) and have a keen interest in modern web technologies, UI/UX design, and API development. My expertise includes building dynamic websites, e-commerce platforms, dashboards, and portfolio websites with optimized performance and SEO. As a freelancer, I collaborate with businesses and individuals to develop custom web solutions that meet their unique needs. From responsive designs to secure payment integrations, I ensure that every project delivers exceptional performance and functionality. I also enjoy sharing my knowledge through technical blogs and open-source contributions. Whether you need a full-fledged web application, a custom website, or technical consultation, I am always eager to take on exciting challenges. Explore my portfolio to see my work, projects, and expertise in modern web development. Let’s build something amazing together! ",
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
