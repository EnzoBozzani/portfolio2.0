type Props = {
    src: string,
    display: string,
    text: string
}

export const Certificate = ({ src, display, text }: Props) => {
    return (
        <div style={{ display: display }} className='w-9/12 flex flex-col justify-center items-center ' data-aos='fade-left'>
            <img src={src} alt="certificate" className='w-full h-auto shadow-lg shadow-green' />
            <p className='mt-3 text-center text-2xl'>{text} Module given by OneBitCode</p>
        </div>
    )
}