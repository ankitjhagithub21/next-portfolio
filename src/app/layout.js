
import "./globals.css";

export const metadata = {
  title: "Ankit Jha - Portfolio",
  description: "Ankit Jha's Portfolio - A showcase of my web development projects, skills, and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
