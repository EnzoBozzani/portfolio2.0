import { NextPage } from "next";
import { Development, PagesLayout, ProjectCard } from "@/src/components";

type Project = {
    imgSrc: string;
    title: string;
    textContent: string;
}

const projects: Project[] = [
    {
        imgSrc: '/bootstrap.png',
        title: 'OneBitFlix - Frontend',
        textContent: 'Lorem'
    }
]

const Projects: NextPage = () => {
    return (
        <PagesLayout>
            <main className="flex flex-col w-full justify-center items-center">
                <p className="text-green text-5xl font-bold my-4">
                    Projects
                </p>
                <div className="max-w-screen-xl flex flex-col justify-center items-center">
                    {projects.map((project: Project) => (
                        <ProjectCard
                            imgSrc={project.imgSrc}
                            title={project.title}
                            textContent={project.textContent}
                        />
                    ))}
                </div>
            </main>
        </PagesLayout>
    )
}

export default Projects;