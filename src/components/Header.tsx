import Link from "next/link";
import React from "react";
import { getScreenWidth } from "../utils/getScreenWidth";

interface Props {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const classes = {
    homeAnchor: 'w-fit py-1.5 px-5 text-white text-xl sm:text-2xl md:text-4xl flex justify-start items-start transition duration-500 hover:scale-125'
}

export const Header: React.FC<Props> = ({ setIsOpen }: Props) => {
    const width = getScreenWidth();

    if (width <= 768) {
        return (
            <>
                <header className="flex justify-between p-2 md:p-6 w-full mb-8">
                    <Link href={'/'} data-aos='flip-up' className={classes.homeAnchor}>
                        <span className="text-green me-2">{'</>'}</span><span>Enzo</span><span>Bozzani</span>
                    </Link>
                    <button data-aos='flip-up' onClick={() => setIsOpen(true)} className='border border-white rounded px-2 hover:border-green'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </header>
            </>
        )
    }

    return (
        <header className="flex justify-between p-6 w-full mb-8">
            <Link data-aos='flip-up' href={'/'} className={classes.homeAnchor}>
                <span className="text-green me-2">{'</>'}</span><span>Enzo</span><span>Bozzani</span>
            </Link>
            <nav className="flex justify-center items-center gap-2.5 w-fit">
                <Link data-aos='flip-up' href={'/experience'} className="text-gray transition duration-500 border-b-2 border-dark pb-3 hover:border-green hover:text-white">
                    Experience
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

