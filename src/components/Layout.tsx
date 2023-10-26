import { useState, useEffect } from "react";
import { Header, Footer, HeaderOffcanvas } from ".";
import Aos from "aos";
import 'aos/dist/aos.css';

interface props {
    children: React.ReactNode
}

export const PagesLayout: React.FC<props> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        Aos.init({
            duration: 500
        });
    }, []);

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