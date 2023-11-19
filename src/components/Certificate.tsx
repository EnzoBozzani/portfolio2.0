import Image from "next/image"

type Props = {
    src: string,
    display: string,
}

export const Certificate = ({ src, display }: Props) => {
    return (
        <div style={{ display: display }} className='w-9/12 flex flex-col justify-center items-center '>
            <Image src={src} alt="certificate" className='w-full h-auto shadow-lg shadow-green' />
        </div>
    )
}