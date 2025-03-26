'use client';
import { Typewriter } from 'react-simple-typewriter';


const TypeWriter = () => {
  return (
    <h2 className="text-3xl my-5 font-serif tracking-wider text-green-600">
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
  );
};

export default TypeWriter;