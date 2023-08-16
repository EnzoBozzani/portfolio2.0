import styles from './Certificate.module.scss';

export const Certificate = ({ src, display, text } : { src: string, display: string, text: string }) => {
    return (
        <div style={{display: display}} className={styles.wrapper}>
            <p>{text} Module given by OneBitCode</p>
            <img src={src} alt="certificate"/>
        </div>
    )
}