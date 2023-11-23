import Link from "next/link";
import { useContext } from "react";
import { TranslationContext } from "./Layout";

interface Props {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const classes = {
    link: 'w-5/6 md:w-1/3 rounded bg-green border-2 border-black flex justify-center items-center py-2 text-xl font-bold hover:-translate-y-2 transition duration-500'
};

export const HeaderOffcanvas: React.FC<Props> = ({ setIsOpen }: Props) => {
    const { lang, setLang } = useContext(TranslationContext);

    return (
        <>
            <nav className='z-50 w-screen h-full fixed top-0 left-0 bg-black/90 flex flex-col'>
                <div className="w-full flex justify-end">
                    <svg
                        onClick={() => setIsOpen(false)}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 m-6 text-green hover:cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="w-full mt-24 flex flex-col justify-center items-center gap-12">
                    <Link className={classes.link} href={`/experience?lang=${lang}`}>
                        {lang === 'en' ? 'Experience' : 'Experiência'}
                    </Link>
                    <Link className={classes.link} href={`/projects?lang=${lang}`}>
                        {lang === 'en' ? 'Projects' : 'Projetos'}
                    </Link>
                    <Link className={classes.link} href={`/contact?lang=${lang}`}>
                        {lang === 'en' ? 'Contact' : 'Contato'}
                    </Link>
                    <button
                        onClick={() => setLang((current: any) => current === 'pt' ? 'en' : 'pt')}
                        className='w-1/3 rounded bg-green border-2 border-black flex justify-center items-center py-2 text-xl font-bold hover:-translate-y-2 transition duration-500'
                    >
                        <p className='text-2xl'>
                            {lang.toUpperCase()}
                        </p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="w-9 h-9 py-1"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                        </svg>
                    </button>
                </div>
            </nav>
        </>
    )
}