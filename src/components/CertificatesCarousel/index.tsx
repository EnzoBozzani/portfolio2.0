'use client';

import styles from './styles.module.scss';
import { Certificate } from './Certificate';

export const CertificatesCarousel: React.FC = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.text}>
                <p className={styles.title}>Certificates</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quam reiciendis perspiciatis itaque magnam fuga ab voluptate quidem deleniti. Minus soluta rem suscipit nisi velit! Sint culpa in quod quia repudiandae obcaecati facere soluta, iste fuga quam nemo impedit hic aliquid similique assumenda est id, sunt minus pariatur neque magni.</p>
            </div>
            <div className={styles.certificates}>
                <button>
                    passar
                </button>
                <Certificate src={'/'}/>
                <Certificate src={'/'}/>
                <Certificate src={'/'}/>
                <Certificate src={'/'}/>
                <Certificate src={'/'}/>
                <Certificate src={'/'}/>
                <Certificate src={'/'}/>
                <Certificate src={'/'}/>
                <Certificate src={'/'}/>
                <Certificate src={'/'}/>
                <Certificate src={'/'}/>
                <Certificate src={'/'}/>
                <Certificate src={'/'}/>
                <button>
                    Passar
                </button>
            </div>
        </section>
    )
}