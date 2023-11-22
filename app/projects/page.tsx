import { NextPage, Metadata } from "next";
import { PagesLayout } from "@/src/components";
import { ProjectsPage } from "@/src/screens";

export const metadata: Metadata = {
    title: 'Enzo Bozzani - Projects',
    description: 'Enzo Bozzani, a software developer (JavaScript, TypeScript, ReactJS, NodeJS), portfolio projects page, containing information about his main projects.'
}

const Projects: NextPage = () => {
    return (
        <PagesLayout>
            <ProjectsPage />
        </PagesLayout>
    )
}

export default Projects;