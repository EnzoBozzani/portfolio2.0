interface Props {
    url: string;
    title: string;
}

export const SlideCard: React.FC<Props> = ({ url, title }) => {
    return (
        <div className='w-96 h-80 border rounded border-gray flex flex-col shadow shadow-green bg-black'>
            <img
                src={url}
                alt="certificate"
                className='w-full h-auto'
            />
            <p className="w-full h-full text-center font-sm">
                <span className='highlighted'>{title}</span> Module Given by OneBitCode
            </p>
        </div>
    )
}