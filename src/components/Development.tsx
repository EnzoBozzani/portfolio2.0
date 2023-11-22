import { useContext } from "react"
import { TranslationContext } from "./Layout"

export const Development: React.FC = () => {
    const { lang } = useContext(TranslationContext);
    return (
        <div className='w-full text-center mt-24 text-gray text-xl md:text-4xl'>
            {lang === 'en' ? 'Development' : 'Em Desenvolvimento'} 🚧
        </div>
    )
}