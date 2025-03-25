import Link from "next/link"


const Header = () => {
  return (
    <header className="w-full fixed top-0">
      <div className="container mx-auto p-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">{"<Ankit Jha/>"}</h1>
        <div className="flex items-center gap-5">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>
    </header>
  )
}

export default Header