import Image from "next/image";

interface Props {
    title: string;
    textContent: string;
}

export const ProjectCard: React.FC<Props> = ({ title, textContent }) => {
    return (
        <div
            className="w-full flex flex-col border-2 border-green shadow-md shadow-green"
        >
            <div className="flex flex-col p-6 gap-4 max-h-96 bg-dark">
                <span>
                    <p className='text-white text-bold text-xl'>{title}</p>
                    {/* icons aqui */}
                </span>
                <p className='text-gray text-justify text-clip overflow-hidden'>{textContent}</p>
                {/* link para o repositório aqui */}
            </div>
        </div>
    )
}