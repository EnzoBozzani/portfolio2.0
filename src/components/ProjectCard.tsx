import { useContext, useState } from "react";
import { ScreenWidthContext, TranslationContext } from "./Layout";

interface Props {
    title: string;
    textContent: string;
    children: React.ReactNode;
    repoUrl: string;
}

export const ProjectCard: React.FC<Props> = ({ title, textContent, children, repoUrl }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { width } = useContext(ScreenWidthContext);
    const { lang } = useContext(TranslationContext);

    const ClickToShow = () => {
        return (
            <p
                className='text-gray text-justify'>
                {textContent.slice(0, 50)}<i className="italic font-light text-white cursor-pointer" onClick={() => setIsExpanded(true)}>
                    {lang === 'en' ? ' ...Click to Show' : '...Clique p/ Mostrar'}</i>
            </p>
        )
    }

    const ClickToHide = () => {
        return (
            <p
                className='text-gray text-justify'>
                {textContent}<i className="italic font-light text-white cursor-pointer" onClick={() => setIsExpanded(false)}>
                    {lang === 'en' ? ' Click to Hide' : ' Clique p/ Esconder'}</i>
            </p>
        )
    }

    return (
        <div
            className="w-full flex flex-col border-2 border-green led-effect"
        >
            <div className="flex flex-col p-6 gap-4 bg-dark">
                <span className='w-full flex flex-col flex-row gap-3 sm:flex-row justify-between px-2 items-center'>
                    <p className='text-white text-bold text-lg sm:text-xl'>{title}</p>
                    {children}
                </span>
                {width > 420 ?
                    <p className='text-gray text-justify'>
                        {textContent}
                    </p>
                    : isExpanded ? <ClickToHide /> : <ClickToShow />}
                <a
                    target="_blank"
                    href={repoUrl}
                    className='border rounded w-48 sm:w-72 flex justify-center items-center bg-green py-2 font-semibold'
                >
                    {
                        lang === 'en' ?
                            "View on GitHub"
                            :
                            "Veja no GitHub"
                    }
                </a>
            </div>
        </div>
    )
}