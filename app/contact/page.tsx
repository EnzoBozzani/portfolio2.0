import { NextPage, Metadata } from "next";
import { PagesLayout } from "@/src/components";
import { ContactPage } from "@/src/pages";

export const metadata: Metadata = {
    title: 'Enzo Bozzani - Contact',
    description: 'Enzo Bozzani, a software developer (JavaScript, TypeScript, ReactJS, NodeJS), portfolio contact page, containing ways to get in touch.'
}

const Contact: NextPage = () => {
    return (
        <PagesLayout>
            <ContactPage />
        </PagesLayout>
    )
}

export default Contact;