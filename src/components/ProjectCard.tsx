interface Props {
    title: string;
    textContent: string;
    children: React.ReactNode;
    repoUrl: string;
}

export const ProjectCard: React.FC<Props> = ({ title, textContent, children, repoUrl }) => {
    return (
        <div
            className="w-full flex flex-col border-2 border-green led-effect"
        >
            <div className="flex flex-col p-6 gap-4 max-h-96 bg-black">
                <span className='w-full flex justify-between px-2 items-center'>
                    <p className='text-white text-bold text-xl'>{title}</p>
                    {children}
                </span>
                <p className='text-gray text-justify'>{textContent}</p>
                <p className="text-green">
                    {repoUrl}
                </p>
            </div>
        </div>
    )
}