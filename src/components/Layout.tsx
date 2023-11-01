import { useState, useEffect, createContext } from "react";
import { Header, Footer, HeaderOffcanvas } from ".";
import Aos from "aos";
import 'aos/dist/aos.css';
import { getScreenWidth } from "../utils/getScreenWidth";

interface Props {
    children: React.ReactNode
}

interface ContextInterface {
    width: number;
}

export const ScreenWidthContext = createContext<ContextInterface>({ width: 0 })

export const PagesLayout: React.FC<Props> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const width = getScreenWidth();

    useEffect(() => {
        Aos.init({
            duration: 500
        });
    }, []);

    return (
        <main className='layout'>
            <ScreenWidthContext.Provider value={{ width }} >
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
            </ScreenWidthContext.Provider>
        </main>
    )
}