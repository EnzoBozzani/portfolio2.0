import { NextPage } from "next";
import { ProjectCard, PagesLayout } from "@/src/components";
import { ReactElement } from "react";
import { TechSvg } from "@/src/components/TechSvg";
import styles from './page.module.scss';

export type Project = {
    title: string,
    gitHubUrl: string,
    description: string,
    techImgsArr: ReactElement[]
}

const projects: Project[] = [
    {
        title: 'Landing Page',
        gitHubUrl: 'https://github.com/EnzoBozzani/landing-page',
        description: 'Simple and responsive landing page using only HTML and CSS',
        techImgsArr: [
            <TechSvg><g transform="scale(8.53333,8.53333)"><path d="M25.428,3.333c-0.19,-0.212 -0.461,-0.333 -0.745,-0.333h-19.366c-0.284,0 -0.555,0.121 -0.745,0.333c-0.19,0.212 -0.28,0.495 -0.249,0.777l2.202,19.823c0.044,0.403 0.329,0.74 0.719,0.851l7.48,2.137c0.09,0.026 0.183,0.039 0.275,0.039c0.092,0 0.185,-0.013 0.275,-0.039l7.48,-2.137c0.39,-0.111 0.674,-0.448 0.719,-0.851l2.203,-19.823c0.032,-0.282 -0.058,-0.565 -0.248,-0.777zM20.629,10.43h-8.93l0.212,2.542h8.503l-0.638,7.51l-4.773,1.518l-0.047,-0.015l-4.72,-1.505l-0.258,-3.06h2.312l0.101,1.189l2.637,0.581l2.591,-0.582l0.275,-3.213h-8.09l-0.626,-7.395h11.659z"></path></g></TechSvg>,
            <TechSvg><g transform="scale(8.53333,8.53333)"><path d="M25.428,3.333c-0.19,-0.212 -0.461,-0.333 -0.745,-0.333h-19.366c-0.284,0 -0.555,0.121 -0.745,0.333c-0.19,0.212 -0.28,0.495 -0.249,0.777l2.202,19.823c0.044,0.403 0.329,0.74 0.719,0.851l7.48,2.137c0.09,0.026 0.183,0.039 0.275,0.039c0.092,0 0.185,-0.013 0.275,-0.039l7.48,-2.137c0.39,-0.111 0.674,-0.448 0.719,-0.851l2.203,-19.823c0.032,-0.282 -0.058,-0.565 -0.248,-0.777zM20.516,13.074l-0.446,7.285l-5.038,1.647l-5.038,-1.647l-0.191,-3.484h2.55l0.064,1.584l2.615,0.887l2.615,-0.887l0.191,-2.85h-5.612l-0.127,-2.534h5.867l0.191,-2.534h-8.801l-0.191,-2.535h11.67z"></path></g></TechSvg>
        ],
    }
]

const Projects: NextPage = () => {
    return (
        <PagesLayout>
            <main className={styles.wrapper}>
                <p className={styles.title}>
                    Projects
                </p>
                {projects.map((project) => {
                    return (
                        <ProjectCard project={project} />
                    )
                })}
            </main>
        </PagesLayout>
    )
}

export default Projects;