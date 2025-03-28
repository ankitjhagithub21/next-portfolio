'use client'
import Image from 'next/image'
import { useState } from 'react';
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
const Projects = () => {
    const [index, setIndex] = useState(0)
    const projects = [
        {
            id: 1,
            name: "MealMate",
            description: "A full-stack food delivery app built using the MERN stack, Cloudinary for storing images, and Stripe payment gateway for payment processing.",
            live: "https://meal-mate-food-order.vercel.app/",
            image: "/mealmate.png"
        },
        {
            id: 2,
            name: "Beat Box",
            description: "A music player built using React where users listen to songs, view lists of songs, and download songs.",
            live: "https://beatbox-ankit.vercel.app/",
            image: "/beatbox.png"
        },

        {
            id: 3,
            name: "Medium Clone",
            description: "A Medium clone built using ReactJS, NodeJS, MongoDB, TailwindCSS, and Cloudinary.",
            live: "https://medium-clone-by-ankit.vercel.app/",
            image: "/medium.png"
        },
        {
            id: 4,
            name: "MakeMyTrip",
            description: "A travel website built using the MERN stack. It allows users to explore various travel destinations, share their experiences, and interact with the platform in multiple ways.",
            live: "https://makemytrip-ankit.vercel.app/",
            image: "/makemytrip.png"
        },
    ];


    const handleNextProject = () => {
        if (index < projects.length - 1) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
    }
    const handlePrevProject = () => {
        if (index > 1) {
            setIndex(index - 1)
        } else {
            setIndex(0)
        }
    }

    return (


        <div className='flex md:flex-row flex-col items-center gap-5  justify-center'>
            <button onClick={handlePrevProject} className='cursor-pointer bg-gray-500 hover:bg-gray-600 text-white rounded-full p-2'>
                <MdArrowLeft size={30} />
            </button>
            <div className='shadow-xl  max-w-[300px]  bg-white/80 dark:bg-gray-900/80 backdrop-blur-md w-full rounded-xl overflow-hidden'>
                <Image src={projects[index].image} alt={projects[index].name} width={300} height={250} />
                <div className='p-5'>
                    <h2 className='mb-2 text-2xl tracking-wider  font-serif'>{projects[index].name}</h2>
                    <p className='mb-4 font-mono'>{projects[index].description}</p>
                  <div className='text-right'>
                  <a href={projects[index].live} target='_blank'  className='bg-gray-800 border border-gray-500 hover:bg-gray-900 px-4 py-2'>Live Demo</a>
                  </div>
                </div>
            </div>
            <button className='cursor-pointer bg-green-500 text-white hover:bg-green-600 rounded-full p-2' onClick={handleNextProject}>
                <MdArrowRight size={30} />
            </button>
        </div>

    )
}

export default Projects