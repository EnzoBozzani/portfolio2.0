import styles from './styles.module.scss';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.wrapper}>
            <a href="" target='_blank'><img src="/github.svg" alt="github logo" /></a>
            <a href="" target='_blank'><img src="" alt="" /></a>
            <a href="" target='_blank'><img src="" alt="" /></a>
        </footer>
    )
}