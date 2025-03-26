import "./globals.css";
import Menu from "@/components/Menu";

export const metadata = {
  title: "Ankit Jha - Portfolio",
  description:
    "Ankit Jha's Portfolio - A showcase of my web development projects, skills, and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  cz-shortcut-listen="true">
        <main className="h-screen w-full relative overflow-hidden bg-[#2f3640] text-gray-100">
          
          <Menu />
          {children}
        </main>
      </body>
    </html>
  );
}
