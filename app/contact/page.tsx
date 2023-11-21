import { NextPage, Metadata } from "next";
import { ContactSection, Development, PagesLayout, SocialMediaSection, Toast } from "@/src/components";

export const metadata: Metadata = {
    title: 'Enzo Bozzani - Contact',
    description: 'Enzo Bozzani, a software developer (JavaScript, TypeScript, ReactJS, NodeJS), portfolio contact page, containing ways to get in touch.'
}

const ContactPage: NextPage = () => {

    return (
        <PagesLayout>
            <main className="flex-1">
                <ContactSection />
                <Development />
            </main>
        </PagesLayout>
    )
}

export default ContactPage;