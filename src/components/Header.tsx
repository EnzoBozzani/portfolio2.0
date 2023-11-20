import Link from "next/link";
import React, { useContext } from "react";
import { ScreenWidthContext } from "./Layout";

interface Props {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const classes = {
    homeAnchor: 'w-fit py-1.5 px-5 text-white text-xl sm:text-2xl md:text-4xl flex justify-center items-center gap-2 transition duration-500 hover:text-slate-300',
    header: "flex justify-between p-2 md:p-6 w-full mb-8 sticky top-0 backdrop-blur z-50",
    headerAnchors: 'text-gray transition duration-500 border-b-2 border-transparent pb-3 hover:border-green hover:text-white'
}

export const Header: React.FC<Props> = ({ setIsOpen }: Props) => {
    const { width } = useContext(ScreenWidthContext);

    if (width <= 768) {
        return (
            <>
                <header className={classes.header}>
                    <Link href={'/'} className={classes.homeAnchor}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="w-8 h-8 text-green"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>
                        <span>Enzo</span><span>Bozzani</span>
                    </Link>
                    <button onClick={() => setIsOpen(true)} className='border border-green rounded px-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-green">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </header>
            </>
        )
    }

    return (
        <header className={classes.header}>
            <Link href={'/'} className={classes.homeAnchor}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="w-8 h-8 text-green"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                <span>Enzo</span><span>Bozzani</span>
            </Link>
            <nav className="flex justify-center items-center gap-2.5 w-fit">
                <Link href={'/experience'} className={classes.headerAnchors}>
                    Experience
                </Link>
                <Link href={'/projects'} className={classes.headerAnchors}>
                    Projects
                </Link>
                <Link href={'/contact'} className={classes.headerAnchors}>
                    Contact
                </Link>
            </nav>
        </header>
    )
}

