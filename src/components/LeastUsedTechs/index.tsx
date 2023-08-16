import styles from './styles.module.scss';
import { Tech } from './Tech';

export const LeastUsedTech: React.FC = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.techs}>
                <span>
                    <Tech src='/c.svg' text='C' />
                    <Tech src='/python.svg' text='Python' />
                </span>
                <span>
                    <Tech src='/java.svg' text='Java' />
                    <Tech src='/mongodb.svg' text='MongoDB' />
                </span>
            </div>
            <div className={styles.text}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, reiciendis corporis animi iure dolores dicta reprehenderit minima sequi voluptas voluptate quo aut voluptatum cumque exercitationem aspernatur tempora culpa quis perferendis! Ratione doloremque atque autem sapiente mollitia libero ducimus enim expedita qui? Tempora asperiores dolor quam modi qui quod totam repellat cum! Ipsam expedita est et repellendus accusamus dicta. Repellat voluptas mollitia minima necessitatibus voluptate deserunt ipsa cum sequi? Dolorem, eveniet.</p>
            </div>
        </section>
    )
}