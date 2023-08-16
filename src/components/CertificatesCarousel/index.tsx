'use client';

import styles from './styles.module.scss';
import { Certificate } from './Certificate';
import { useState } from 'react';
import Image from 'next/image';


export const CertificatesCarousel: React.FC = () => {
    const [ selected, setSelected ] = useState(0);
    return (
        <section className={styles.wrapper}>
            <div className={`${styles.text} ${styles.sections}`}>
                <p className={styles.title}>Certificates</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ducimus vel tempora fugiat sint totam aliquam doloribus placeat, sunt possimus in. Dolores atque cumque commodi animi. Fugit assumenda error, veritatis corporis voluptates ipsa ullam reiciendis non natus. Voluptatem tenetur facere ut iure sapiente consequuntur officiis at dicta! Minus nemo nihil a aut, veritatis maxime nulla voluptatem aliquam totam. Cum cupiditate eius dolores, perspiciatis id laudantium asperiores! Vitae dignissimos dolore doloremque?</p>
            </div>
            <div className={`${styles.certificates} ${styles.sections}`}>
                <button 
                    onClick={() => setSelected(currentState => {
                            if (selected === 0){
                                return 11;
                            }
                            currentState--;
                            console.log(currentState);
                            return currentState;
                        })
                    }
                >
                    <Image src='/arrow.png' alt='arrow' height={100} width={100}/>
                </button>
                <Certificate src={'/html.png'} display={selected === 0 ? 'block' : 'none'} text='HTML'/>
                <Certificate src={'/css.png'} display={selected === 1 ? 'block' : 'none'} text='CSS'/>
                <Certificate src={'/css-moderno.png'} display={selected === 2 ? 'block' : 'none'} text='Modern CSS'/>
                <Certificate src={'/sass.png'} display={selected === 3 ? 'block' : 'none'} text='SASS'/>
                <Certificate src={'/javascript.png'} display={selected === 4 ? 'block' : 'none'} text='JavaScript'/>
                <Certificate src={'/git.png'} display={selected === 5 ? 'block' : 'none'} text='Git & GitHub'/>
                <Certificate src={'/ts.png'} display={selected === 6 ? 'block' : 'none'} text='TypeScript'/>
                <Certificate src={'/react.png'} display={selected === 7 ? 'block' : 'none'} text='React'/>
                <Certificate src={'/nodejs.png'} display={selected === 8 ? 'block' : 'none'} text='NodeJS'/>
                <Certificate src={'/mongo.png'} display={selected === 9 ? 'block' : 'none'} text='MongoDB'/>
                <Certificate src={'/sql.png'} display={selected === 10 ? 'block' : 'none'} text='SQL'/>
                <Certificate src={'/bootstrap.png'} display={selected === 11 ? 'block' : 'none'} text='BootStrap'/>
                <button 
                    onClick={() => setSelected(currentState => {
                            if (selected === 11){
                                return 0;
                            }
                            currentState++;
                            console.log(currentState);
                            return currentState;
                        })
                    }
                >
                    <Image src='/arrow.png' alt='arrow' height={100} width={100} style={{rotate: '180deg'}}/>
                </button>
            </div>
        </section>
    )
}