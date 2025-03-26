import Image from "next/image"
const SocialMedia = () => {
    return (
        <div className="flex items-center lg:justify-start justify-center gap-6 ">
            <a
                href="https://www.facebook.com/@ankitjha2018"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-300"
            >
                {/* <Facebook className="w-8 h-8" /> */}
                <Image
                    src="/facebook.png"
                    alt="Facebook Icon"
                    width={30}
                    height={30}
                />
            </a>

            <a
                href="https://github.com/ankitjhagithub21"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-300"
            >
                <Image src="/github.png" alt="Github Icon" width={30} height={30} />
            </a>

            <a
                href="https://www.linkedin.com/in/ankitjha3731/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-300"
            >
                <Image
                    src="/linkedin.png"
                    alt="Linkedin Icon"
                    width={30}
                    height={30}
                />
            </a>
        </div>
    )
}

export default SocialMedia