import Image from "next/image";
import { useContext, useState } from "react";
import { Toast } from ".";
import { TranslationContext } from "./Layout";

interface PDFViewerProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ setIsOpen }) => {
    const handleClick = (ev: any) => {
        if (ev.target.id !== 'resume') setIsOpen(false);
    };

    return (
        <div
            onClick={handleClick}
            className='z-50 w-screen min-h-screen absolute top-0 left-0 flex justify-center backdrop-blur-xl py-24 lg:py-12 px-4'
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-10 h-10 text-white absolute top-1 right-1 sm:top-2 sm:right-2 lg:top-4 lg:right-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <Image
                id="resume"
                width={671}
                height={865}
                className='h-fit'
                alt="My resume"
                src={'/resume.png'}
            />
        </div>
    )
}

export const ResumeSection: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isToastOpen, setIsToastOpen] = useState(false);
    const { lang } = useContext(TranslationContext);

    return (
        <section className='flex flex-col justify-center items-center mt-8 gap-8'>
            <span className={`flex justify-center items-center ${lang === 'en' ? 'gap-9' : 'gap-5'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 text-gray">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
                <p className='text-gray text-xl'>
                    {lang === 'en' ? "Show Resume" : "Mostrar Currículo"}
                </p>
                <svg
                    onClick={() => setIsOpen(true)}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 p-1 text-gray rounded-full hover:bg-white/20 hover:cursor-pointer animate-pulse">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </span>
            <span className={`flex justify-center items-center ${lang === 'en' ? 'gap-3' : 'gap-6'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 text-gray">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
                <p className='text-gray text-xl'>{lang === 'en' ? "Download Resume" : "Baixar Currículo"}</p>
                <a href="/EnzoBozzani.pdf" download="EnzoBozzani.pdf" >
                    <svg onClick={() => {
                        setIsToastOpen(true);
                        setTimeout(() => setIsToastOpen(false), 1E3);
                    }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 p-1 text-gray rounded-full hover:bg-white/20 hover:cursor-pointer animate-pulse">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>

                </a>
            </span>
            {
                isOpen && <PDFViewer setIsOpen={setIsOpen} />
            }
            {isToastOpen && <Toast text='Resume downloaded!' type='success' setIsOpen={setIsOpen} />}
        </section>
    )
}