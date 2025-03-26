'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaWrench, FaPhone, FaUser, FaLaptopCode } from "react-icons/fa";

const menuItems = [
  { href: "/", icon: <FaHome size={25} />, label: "Home" },
  { href: "/about", icon: <FaUser size={23} />, label: "About" },
  { href: "/skills", icon: <FaWrench size={23} />, label: "Skills" },
  { href: "/projects", icon: <FaLaptopCode size={23} />, label: "Projects" },
  { href: "/contact", icon: <FaPhone size={20} />, label: "Contact" },
];

const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 right-0 lg:h-full w-full lg:w-fit p-3 z-50 flex lg:flex-col flex-row items-center justify-center gap-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg rounded-lg">
      {menuItems.map(({ href, icon, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            aria-label={label}
            className={`p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 text-blue-400 transition-all duration-300 ${
              isActive ? "bg-gray-200 dark:bg-gray-600" : "bg-gray-800"
            }`}
          >
            {icon}
          </Link>
        );
      })}
    </nav>
  );
};

export default Menu;