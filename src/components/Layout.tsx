"use client";

import { useState } from "react";
import { Header, Footer } from ".";

interface props {
    children: React.ReactNode
}

export const Layout: React.FC<props> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main className='layout'>
            <Header
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            {children}
            <Footer />
        </main>
    )
}