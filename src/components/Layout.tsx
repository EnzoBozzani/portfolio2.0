import { useState, createContext, useContext } from "react";
import { Header, Footer, HeaderOffcanvas } from ".";
import { useScreenWidth } from "../utils/getScreenWidth";

interface Props {
    children: React.ReactNode
}

interface ScreenContextInterface {
    width: number;
}

type Language = 'pt' | 'en';
interface TranslationContextInterface {
    lang: Language;
    setLang: React.Dispatch<React.SetStateAction<Language>>;
}

export const ScreenWidthContext = createContext<ScreenContextInterface>({ width: 0 });
export const TranslationContext = createContext<TranslationContextInterface | any>({});

export const PagesLayout: React.FC<Props> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLang] = useState<Language>('pt');
    const width = useScreenWidth();

    return (
        <main className='layout'>
            <TranslationContext.Provider value={{ lang: language, setLang: setLang }}>
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
            </TranslationContext.Provider>
        </main>
    )
}