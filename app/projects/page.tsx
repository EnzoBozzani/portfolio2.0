import { NextPage } from "next";
import { PagesLayout, ProjectCard } from "@/src/components";

type Project = {
    title: string;
    textContent: string;
}

const projects: Project[] = [
    {
        title: 'OneBitFlix - Frontend',
        textContent: 'The frontend project is the interface for an online course platform, designed to provide a seamless and engaging user experience. Built using React, TypeScript, NextJS, and SCSS, the platform features a compelling landing page aimed at attracting new users. It incorporates user authentication with a user-friendly registration and login system. The platform showcases new releases, featured courses, and the most popular ones, enhancing user discovery and navigation. Each course has its dedicated page, along with individual episodes, offering a comprehensive and organized learning environment for users.'
    }
]

const Projects: NextPage = () => {
    return (
        <PagesLayout>
            <main className="flex flex-col w-full justify-center items-center">
                <p className="text-green text-5xl font-bold mb-12">
                    Projects
                </p>
                <div className="max-w-screen-md flex flex-col justify-center items-center mx-8">
                    {projects.map((project: Project) => (
                        <ProjectCard
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