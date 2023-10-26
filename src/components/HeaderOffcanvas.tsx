import Link from "next/link";

interface props {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderOffcanvas: React.FC<props> = ({ setIsOpen }: props) => {

    return (
        <>
            <nav data-aos="fade-left" data-aos-duration="500" className='w-full h-screen bg-gray flex flex-col'>
                <div className="w-full flex justify-end">
                    <svg
                        onClick={() => setIsOpen(false)}
                        className="w-12 h-12 m-6 hover:text-green hover:cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className="w-full mt-24 flex flex-col justify-center items-center gap-12">
                    <Link className='w-1/3 rounded shadow-2xl bg-green border-2 border-black flex justify-center items-center py-2 text-xl font-bold hover:-translate-y-4 transition duration-500' href='/tech'>
                        Tech Stack
                    </Link>
                    <Link className='w-1/3 rounded shadow-2xl bg-green border-2 border-black flex justify-center items-center py-2 text-xl font-bold hover:-translate-y-4 transition duration-500' href='/projects'>
                        Projects
                    </Link>
                    <Link className='w-1/3 rounded shadow-2xl bg-green border-2 border-black flex justify-center items-center py-2 text-xl font-bold hover:-translate-y-4 transition duration-500' href='/contact'>
                        Contact
                    </Link>
                </div>
            </nav>
        </>
    )
}