import { useContext } from "react";
import { TranslationContext } from "../components/Layout";
import { ContactSection, ResumeSection } from "../components";

export const ContactPage: React.FC = () => {
    const { lang } = useContext(TranslationContext);

    return (
        <main className="flex-1">
            <h2 className='text-4xl sm:text-6xl text-green font-bold w-full text-center my-12'>
                {lang === 'en' ? 'Contact' : 'Contato'}
            </h2>
            <ContactSection />
            <ResumeSection />
        </main>
    )
}