import Image from 'next/image';
import styles from './Tech.module.scss';

export const Tech = ({ src, text } : { src: string, text: string }) => {
    return (
        <div className={styles.wrapper}>
            <Image src={src} alt='tech logo' width={48} height={48}/>
            <span>{text}</span>
        </div>
    )
}