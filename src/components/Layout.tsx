import { useState, createContext } from "react";
import { Header, Footer, HeaderOffcanvas } from ".";
import { useScreenWidth } from "../utils/getScreenWidth";

interface Props {
    children: React.ReactNode
}

interface ContextInterface {
    width: number;
}

export const ScreenWidthContext = createContext<ContextInterface>({ width: 0 })

export const PagesLayout: React.FC<Props> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const width = useScreenWidth();

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