import Link from "next/link"
import { FaHome, FaWrench, FaPhone, FaUser, FaLaptopCode } from "react-icons/fa"

const Menu = () => {
  return (
    <div className="lg:h-full w-full lg:w-fit p-5 z-50 flex lg:flex-col flex-row items-center justify-center gap-5 fixed top-0 right-0">


      <Link href={"/"}>
        <FaHome size={25} />
      </Link>
      <Link href={"/about"}>
        <FaUser size={23} />
      </Link>
      <Link href={"/skills"}>
        <FaWrench size={23} />
      </Link>
      <Link href={"/projects"}>
        <FaLaptopCode size={23} />
      </Link>

      <Link href={"/contact"}>
        <FaPhone size={20} />
      </Link>


    </div>
  )
}

export default Menu