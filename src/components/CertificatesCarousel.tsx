import { Certificate } from './Certificate';
import { useState } from 'react';
import Image from 'next/image';


export const CertificatesCarousel: React.FC = () => {
    const [selected, setSelected] = useState(0);
    return (
        <section className='mt-12 max-w-screen-lg mx-auto flex flex-col justify-center items-center'>
            <div className='w-full text-center text-green text-4xl font-black'>
                <p>Certificates</p>
            </div>
            <div className='w-full mt-8 flex justify-center items-center'>
                <button
                    className='bg-transparent border-none w-14'
                    onClick={() => setSelected(currentState => {
                        if (selected === 0) {
                            return 11;
                        }
                        currentState--;
                        return currentState;
                    })
                    }
                >
                    <Image className='w-full h-auto transition duration-500' src='/arrow.png' alt='arrow' height={100} width={100} />
                </button>
                <Certificate src={'/html.png'} display={selected === 0 ? 'block' : 'none'} text='HTML' />
                <Certificate src={'/css.png'} display={selected === 1 ? 'block' : 'none'} text='CSS' />
                <Certificate src={'/css-moderno.png'} display={selected === 2 ? 'block' : 'none'} text='Modern CSS' />
                <Certificate src={'/sass.png'} display={selected === 3 ? 'block' : 'none'} text='SASS' />
                <Certificate src={'/javascript.png'} display={selected === 4 ? 'block' : 'none'} text='JavaScript' />
                <Certificate src={'/git.png'} display={selected === 5 ? 'block' : 'none'} text='Git & GitHub' />
                <Certificate src={'/ts.png'} display={selected === 6 ? 'block' : 'none'} text='TypeScript' />
                <Certificate src={'/react.png'} display={selected === 7 ? 'block' : 'none'} text='React' />
                <Certificate src={'/nodejs.png'} display={selected === 8 ? 'block' : 'none'} text='NodeJS' />
                <Certificate src={'/mongo.png'} display={selected === 9 ? 'block' : 'none'} text='MongoDB' />
                <Certificate src={'/sql.png'} display={selected === 10 ? 'block' : 'none'} text='SQL' />
                <Certificate src={'/bootstrap.png'} display={selected === 11 ? 'block' : 'none'} text='BootStrap' />
                <button
                    className='bg-transparent border-none w-14'
                    onClick={() => setSelected(currentState => {
                        if (selected === 11) {
                            return 0;
                        }
                        currentState++;
                        return currentState;
                    })
                    }
                >
                    <Image className='w-full h-auto' src='/arrow.png' alt='arrow' height={100} width={100} style={{ rotate: '180deg' }} />
                </button>
            </div>
        </section>
    )
}