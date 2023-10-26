import { useState } from "react";
import { Header, Footer } from ".";

interface props {
    children: React.ReactNode
}

interface headerProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderOffcanvas: React.FC<headerProps> = ({ setIsOpen }: headerProps) => {

    return (
        <>
            <nav className='w-full h-screen bg-gray flex flex-col'>
                <svg
                    onClick={() => setIsOpen(false)}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </nav>
        </>
    )
}

export const PagesLayout: React.FC<props> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main className='layout'>
            {isOpen ?
                <HeaderOffcanvas
                    setIsOpen={setIsOpen}
                />
                :
                (
                    <>
                        <Header
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                        />
                        {children}
                        <Footer />
                    </>
                )
            }
        </main>
    )
}