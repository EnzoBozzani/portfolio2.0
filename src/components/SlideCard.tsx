import Image from "next/image";
interface Props {
    url: string;
    title?: string;
}

export const SlideCard: React.FC<Props> = ({ url, title }) => {
    return (
        <div className='w-72 h-auto sm:w-96 sm:h-80 border mx-auto rounded border-gray flex flex-col shadow shadow-green bg-black'>
            <Image
                src={url}
                alt="certificate"
                width={288}
                height={300}
                style={{
                    width: '100%',
                    height: 'auto'
                }}
            />
            <p className="w-full h-full text-center font-sm">
                {
                    title ?
                        <><span className='highlighted'>{title}</span> Module Given by OneBitCode</>
                        :
                        <><span className='highlighted'>Best Placement</span> in the University Center FEI 2022 Selection Process</>
                }
            </p>
        </div>
    )
}