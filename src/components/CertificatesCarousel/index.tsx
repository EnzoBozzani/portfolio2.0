'use client';

import styles from './styles.module.scss';
import { Certificate } from './Certificate';
import { useState } from 'react';
import { log } from 'console';

export const CertificatesCarousel: React.FC = () => {
    const [ selected, setSelected ] = useState(0);
    return (
        <section className={styles.wrapper}>
            <div className={styles.text}>
                <p className={styles.title}>Certificates</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quam reiciendis perspiciatis itaque magnam fuga ab voluptate quidem deleniti. Minus soluta rem suscipit nisi velit! Sint culpa in quod quia repudiandae obcaecati facere soluta, iste fuga quam nemo impedit hic aliquid similique assumenda est id, sunt minus pariatur neque magni.</p>
            </div>
            <div className={styles.certificates}>
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
                    Passar
                </button>
                <Certificate src={'/html.png'} display={selected === 0 ? 'block' : 'none'} text='HTML Module given by OneBitCode'/>
                <Certificate src={'/css.png'} display={selected === 1 ? 'block' : 'none'} text='CSS Module given by OneBitCode'/>
                <Certificate src={'/css-moderno.png'} display={selected === 2 ? 'block' : 'none'} text='Modern CSS Module given by OneBitCode'/>
                <Certificate src={'/sass.png'} display={selected === 3 ? 'block' : 'none'} text='SASS Module given by OneBitCode'/>
                <Certificate src={'/javascript.png'} display={selected === 4 ? 'block' : 'none'} text='JavaScript Module given by OneBitCode'/>
                <Certificate src={'/git.png'} display={selected === 5 ? 'block' : 'none'} text='Git & GitHub Module given by OneBitCode'/>
                <Certificate src={'/ts.png'} display={selected === 6 ? 'block' : 'none'} text='TypeScript Module given by OneBitCode'/>
                <Certificate src={'/react.png'} display={selected === 7 ? 'block' : 'none'} text='React Module given by OneBitCode'/>
                <Certificate src={'/nodejs.png'} display={selected === 8 ? 'block' : 'none'} text='NodeJS Module given by OneBitCode'/>
                <Certificate src={'/mongo.png'} display={selected === 9 ? 'block' : 'none'} text='MongoDB Module given by OneBitCode'/>
                <Certificate src={'/sql.png'} display={selected === 10 ? 'block' : 'none'} text='SQL Module given by OneBitCode'/>
                <Certificate src={'/bootstrap.png'} display={selected === 11 ? 'block' : 'none'} text='BootStrap Module given by OneBitCode'/>
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
                    Passar
                </button>
            </div>
        </section>
    )
}