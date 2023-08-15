import Image from "next/image"

export const Certificate = ({src}:{src: string}) => {
    return (
        <Image src={src} alt="certificate" width={500} height={500}/>
    )
}