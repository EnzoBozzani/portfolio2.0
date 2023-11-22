import Image from "next/image";
import { useContext } from "react";
import { TranslationContext } from "./Layout";
interface Props {
    url: string;
    title?: string;
}

export const SlideCard: React.FC<Props> = ({ url, title }) => {
    const { lang } = useContext(TranslationContext);

    return (
        <div className='w-72 h-auto mt-12 sm:mt-0 sm:w-96 sm:h-80 border border-gray mx-auto flex flex-col bg-black'>
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
            <p className="w-full h-full flex justify-center items-center font-sm border-t border-gray">
                {
                    title ?
                        <span className='text-center'>
                            {
                                lang === 'en' ?
                                    (
                                        <><span className='highlighted'>{title}</span> Module Given by OneBitCode</>
                                    )
                                    :
                                    (
                                        <>Módulo de <span className='highlighted'> {title} </span>Ministrado por OneBitCode</>
                                    )
                            }
                        </span>
                        :
                        <span className='text-center'>
                            {
                                lang === 'en' ?
                                    (
                                        <>
                                            <span className='highlighted'>Best Placement</span> in the University Center FEI 2022 Selection Process
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <span className='highlighted'>Melhor colocação</span> no Processo Seletivo FEI 2022
                                        </>
                                    )
                            }
                        </span>
                }
            </p>
        </div>
    )
}