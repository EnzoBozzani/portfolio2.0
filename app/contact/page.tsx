import { NextPage } from "next";
import { Development, PagesLayout } from "@/src/components";

const ContactPage: NextPage = () => {
    return (
        <PagesLayout>
            <main className="flex-1">
                <Development />
            </main>
        </PagesLayout>
    )
}

export default ContactPage;