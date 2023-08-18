import styles from './styles.module.scss';
import { Project } from '@/app/projects/page';

export const ProjectCard = ({ project } : { project: Project }) => {
    return (
        <article className={styles.wrapper}>
            <p className={styles.title}>{project.title}</p>
            <div>
                {project.techImgsArr.map((tech) => tech)}
            </div>
            <p>
                {project.description}
            </p>
        </article>
    )
}