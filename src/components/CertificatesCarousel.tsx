import { Certificate } from './Certificate';
import { useEffect, useState } from 'react';
import Image from 'next/image';


export const CertificatesCarousel: React.FC = () => {
    const [selected, setSelected] = useState(0);
    const [selectedText, setSelectedText] = useState('HTML');

    useEffect(() => {
        setSelectedText(() => {
            switch (selected) {
                case 0:
                    return 'HTML';
                case 1:
                    return 'CSS';
                case 2:
                    return 'Modern CSS';
                case 3:
                    return 'SASS';
                case 4:
                    return 'JavaScript';
                case 5:
                    return 'Git & GitHub';
                case 6:
                    return 'TypeScript';
                case 7:
                    return 'React';
                case 8:
                    return 'NodeJS';
                case 9:
                    return 'MongoDB with NodeJS';
                case 10:
                    return 'SQL Databases with NodeJS';
                case 11:
                    return 'BootStrap';
                default:
                    return '';
            }
        })
    }, [selected]);


    return (
        <section className='mt-12 max-w-screen-lg mx-auto flex flex-col justify-center items-center'>
            <div className='w-full text-center text-green text-4xl font-black'>
                <p>Certificates</p>
            </div>
            <div className='w-full mt-8 flex flex-col justify-center items-center'>
                <div className='w-full flex justify-center items-center'>
                    <button
                        className='bg-transparent border-none'
                        onClick={() => setSelected(currentState => {
                            if (selected === 0) {
                                return 11;
                            }
                            currentState--;
                            return currentState;
                        })
                        }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="w-8 h-8 sm:w-12 sm:h-12 transition duration-500 hover:text-green"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </button>
                    <Certificate src={'/html.png'} display={selected === 0 ? 'block' : 'none'} />
                    <Certificate src={'/css.png'} display={selected === 1 ? 'block' : 'none'} />
                    <Certificate src={'/css-moderno.png'} display={selected === 2 ? 'block' : 'none'} />
                    <Certificate src={'/sass.png'} display={selected === 3 ? 'block' : 'none'} />
                    <Certificate src={'/javascript.png'} display={selected === 4 ? 'block' : 'none'} />
                    <Certificate src={'/git.png'} display={selected === 5 ? 'block' : 'none'} />
                    <Certificate src={'/ts.png'} display={selected === 6 ? 'block' : 'none'} />
                    <Certificate src={'/react.png'} display={selected === 7 ? 'block' : 'none'} />
                    <Certificate src={'/nodejs.png'} display={selected === 8 ? 'block' : 'none'} />
                    <Certificate src={'/mongo.png'} display={selected === 9 ? 'block' : 'none'} />
                    <Certificate src={'/sql.png'} display={selected === 10 ? 'block' : 'none'} />
                    <Certificate src={'/bootstrap.png'} display={selected === 11 ? 'block' : 'none'} />
                    <button
                        className='bg-transparent border-none'
                        onClick={() => setSelected(currentState => {
                            if (selected === 11) {
                                return 0;
                            }
                            currentState++;
                            return currentState;
                        })
                        }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="w-8 h-8 sm:w-12 sm:h-12 transition duration-500 hover:text-green"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </button>
                </div>
                <p className='mt-6 text-center text-lg md:text-2xl'>
                    <span className='highlighted'>{selectedText}</span> Module given by OneBitCode
                </p>
            </div>
        </section>
    )
}