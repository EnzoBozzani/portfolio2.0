import Link from "next/link";
import React from "react";
import { getScreenWidth } from "../utils/getScreenWidth";

interface Props {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<Props> = ({ setIsOpen }: Props) => {
    const width = 700

    if (width <= 768) {
        return (
            <>
                <header className="flex justify-between p-2 md:p-6 w-full mb-8">
                    <Link href={'/'} data-aos='flip-up' className='w-fit py-1.5 px-5 border-2 border-dark rounded-full text-white  text-xl sm:text-2xl flex justify-start items-start transition duration-500 hover:shadow-md hover:border-green hover:shadow-green'>
                        <span className="text-green me-2">{'</>'}</span><span>Enzo</span><span>Bozzani</span>
                    </Link>
                    <button data-aos='flip-up' onClick={() => setIsOpen(true)} className='border border-white rounded px-2 hover:border-green'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </header>
            </>
        )
    }

    return (
        <header className="flex justify-between p-6 w-full mb-8">
            <Link data-aos='flip-up' href={'/'} className='w-fit py-1.5 px-5 border-2 border-dark rounded-full text-white text-3xl flex justify-start items-start transition duration-500 hover:shadow-md hover:border-green hover:shadow-green'>
                <span className="text-green">{'</>'}</span><span>Enzo</span><span>Bozzani</span>
            </Link>
            <nav className="flex justify-center items-center gap-2.5 w-fit">
                <Link data-aos='flip-up' href={'/tech'} className="text-gray transition duration-500 border-b-2 border-dark pb-3 hover:border-green hover:text-white">
                    Tech Stack
                </Link>
                <Link data-aos='flip-up' href={'/projects'} className="text-gray transition duration-500 border-b-2 border-dark pb-3 hover:border-green hover:text-white">
                    Projects
                </Link>
                <Link data-aos='flip-up' href={'/contact'} className="text-gray transition duration-500 border-b-2 border-dark pb-3 hover:border-green hover:text-white">
                    Contact
                </Link>
            </nav>
        </header>
    )
}

