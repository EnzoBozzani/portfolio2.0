import Link from "next/link";
import React from "react";
import styles from './styles.module.scss';
import { getScreenWidth } from "@/src/utils/getScreenWidth";

interface props {
    isOpen?: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderOffcanvas: React.FC<props> = ({ setIsOpen }: props) => {

    return (
        <>
            <nav className='w-full h-screen bg-gray'>
                <svg
                    onClick={() => setIsOpen(false)}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </nav>
        </>
    )
}

export const Header: React.FC<props> = ({ isOpen, setIsOpen }: props) => {
    const width = getScreenWidth();

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    if (width < 768) {
        return (
            <>
                <header className="flex justify-between p-6 bg-white shadow-md">
                    <Link
                        href='/'
                        className='flex gap-2 items-center'
                        onClick={() => isOpen ? handleClick() : null}
                    >
                        <span className='text-xl text-orange-500 font-bold'>Home</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                    <button onClick={handleClick} className='border border-black border-solid rounded px-2 py-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </header>
                {isOpen ? <HeaderOffcanvas setIsOpen={setIsOpen} /> : null}
            </>
        )
    }

    return (
        <header className={styles.wrapper}>
            <Link href={'/'} className={styles.title}>
                <span>{'</>'}</span><span>Enzo</span><span>Bozzani</span>
            </Link>
            <nav>
                <Link href={'/tech'}>
                    Tech Stack
                </Link>
                <Link href={'/projects'}>
                    Projects
                </Link>
                <Link href={'/contact'}>
                    Contact
                </Link>
            </nav>
        </header>
    )
}

