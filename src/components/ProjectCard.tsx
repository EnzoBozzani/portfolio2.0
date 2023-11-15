import Image from "next/image";

interface Props {
    imgSrc: string;
    title: string;
    textContent: string;
}

export const ProjectCard: React.FC<Props> = ({ imgSrc, title, textContent }) => {
    return (
        <div
            className="w-full flex flex-col"
            style={{
                background: 'linear-gradient(to bottom, #151515...)'
            }}
        >
            <div className="flex flex-col p-6">
                <p className=''>{title}</p>
                <p className="">{textContent}</p>
            </div>
        </div>
    )
}