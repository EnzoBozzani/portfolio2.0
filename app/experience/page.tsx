import { NextPage, Metadata } from "next";
import { PagesLayout } from "@/src/components/";
import { ExperiencePage } from "@/src/pages";

export const metadata: Metadata = {
    title: 'Enzo Bozzani - Experience',
    description: 'Enzo Bozzani, a software developer (JavaScript, TypeScript, ReactJS, NodeJS), portfolio experience page, containing information about his experience as a dev.'
}

const Tech: NextPage = () => {
    return (
        <PagesLayout>
            <ExperiencePage />
        </PagesLayout>
    )
}

export default Tech;