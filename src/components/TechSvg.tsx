import { ReactNode, useState } from "react";

export const TechSvg = ({ children }: { children: ReactNode }) => {
    const grey = '#ffffff5e';
    const green = '#01e85d';
    const [color, setColor] = useState(grey);

    return (
        <>
            <svg
                className="w-24 transition hover:-translate-y-6 duration-500"
                onMouseEnter={() => setColor(green)}
                onMouseLeave={() => setColor(grey)}
                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="96px" height="96px" fillRule="nonzero"><g fill={color} fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>{children}</g>
            </svg>
        </>
    )
}