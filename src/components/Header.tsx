import Link from "next/link";
import React, { useContext } from "react";
import { ScreenWidthContext, TranslationContext } from "./Layout";

interface Props {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const classes = {
    header: "flex justify-between p-2 md:p-6 w-full mb-8 sticky top-0 backdrop-blur z-40",
    headerAnchors: 'text-gray transition duration-500 border-b-2 border-transparent pb-3 hover:border-green hover:text-white'
}

export const Header: React.FC<Props> = ({ setIsOpen }: Props) => {
    const { width } = useContext(ScreenWidthContext);
    const { lang, setLang } = useContext(TranslationContext);

    if (width <= 768) {
        return (
            <>
                <header className={classes.header}>
                    <Link href={`/?lang=${lang}`} className='w-fit py-1.5 px-5 text-white text-xl sm:text-2xl md:text-4xl flex justify-center items-center gap-2 transition duration-500 hover:text-slate-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="w-8 h-8 text-green"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>
                        <span>Enzo</span><span>Bozzani</span>
                    </Link>
                    <button onClick={() => setIsOpen(true)} className='border border-green rounded px-2 py-1'>
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
            <Link href={`/?lang=${lang}`} className='w-fit py-1.5 px-5 text-white text-xl sm:text-2xl md:text-4xl flex justify-center items-center gap-2 transition duration-500 hover:text-slate-300 mb-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="w-8 h-8 text-green"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                <span>Enzo</span><span>Bozzani</span>
            </Link>
            <nav className="flex justify-center items-center gap-2.5 w-fit">
                <Link href={`/experience?lang=${lang}`} className={classes.headerAnchors}>
                    {lang === 'en' ? 'Experience' : 'Experiência'}
                </Link>
                <Link href={`/projects?lang=${lang}`} className={classes.headerAnchors}>
                    {lang === 'en' ? 'Projects' : 'Projetos'}
                </Link>
                <Link href={`/contact?lang=${lang}`} className={classes.headerAnchors}>
                    {lang === 'en' ? 'Contact' : 'Contato'}
                </Link>
                <button
                    onClick={() => setLang((current: any) => current === 'pt' ? 'en' : 'pt')}
                    className='ms-6 mb-3 flex justify-center items-center gap-2 rounded border-2 border-gray px-4 py-1 text-gray hover:border-green hover:text-white transition duration-500'
                >
                    <p className='text-2xl'>
                        {lang.toUpperCase()}
                    </p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="w-10 h-10"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                    </svg>
                </button>
            </nav>
        </header>
    )
}

