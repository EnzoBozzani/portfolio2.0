'use client';

import { ReactNode, useState } from "react";

export const TechSvg = ({ children }:{children: ReactNode}) => {
    const grey = '#ffffff5e';
    const green = '#01e85d';
    const [ color, setColor ] = useState(grey);
    return (
        <>
            <svg 
                onMouseEnter={() => setColor(green)}
                onMouseLeave={() => setColor(grey)}
                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="96px" height="96px" fill-rule="nonzero"><g fill={color} fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: 'normal'}}>{children}</g></svg>
        </>
    )
}