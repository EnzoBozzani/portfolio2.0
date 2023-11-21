import { NextPage, Metadata } from "next";
import { ContactSection, PagesLayout, ResumeSection } from "@/src/components";

export const metadata: Metadata = {
    title: 'Enzo Bozzani - Contact',
    description: 'Enzo Bozzani, a software developer (JavaScript, TypeScript, ReactJS, NodeJS), portfolio contact page, containing ways to get in touch.'
}

const ContactPage: NextPage = () => {

    return (
        <PagesLayout>
            <main className="flex-1">
                <h2 className='text-4xl sm:text-6xl text-green font-bold w-full text-center my-12'>
                    Contact
                </h2>
                <ContactSection />
                <ResumeSection />
            </main>
        </PagesLayout>
    )
}

export default ContactPage;