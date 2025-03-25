'use client';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="min-h-screen w-full flex gap-8 items-center justify-start">
      <div className='flex flex-col gap-5 md:p-10 p-5'>
        <div>
          <p className="md:text-2xl text-xl mb-2 flex items-center gap-2">Hello and Welcome 
            <Image src={"/hi.gif"} alt='Hi Icon' width={30} height={30}/>
          </p>
          <h1 className="text-5xl uppercase md:text-8xl font-bold mb-6">
            I'm Ankit Jha
          </h1>
          <h2 className="text-3xl font-semibold my-5">
            <Typewriter
              words={['Full Stack Developer', 'Freelancer', 'MCA Student']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
        </div>

        <div className="flex items-center gap-6 ">
          <a
            href="https://www.facebook.com/@ankitjha2018"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300"
          >
            {/* <Facebook className="w-8 h-8" /> */}
            <Image src="/facebook.png" alt="Facebook Icon" width={30} height={30} />
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
            <Image src="/linkedin.png" alt="Linkedin Icon" width={30} height={30} />

          </a>

        </div>
      </div>
    </div>
  );
};

export default Home;