import Link from "next/link";
import React from "react";
import styles from './styles.module.scss';

export const Header: React.FC =  () => {
    return (
        <header className={styles.wrapper}>
            <Link href={'/'} className={styles.title}>
                <span>{'</>'}</span><span>Enzo</span><span>Bozzani</span>
            </Link>
            <nav>
                <Link href={'/tech'}>
                    Tech Stack
                </Link>
                <Link href={'/projects'}>
                    Projects 
                </Link>
                <Link href={'/contact'}>
                    Contact
                </Link>
            </nav>
        </header>
    )
}