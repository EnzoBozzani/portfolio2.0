import { NextPage } from "next";
import styles from './page.module.scss';

const Tech: NextPage = () => {
    return (
        <main className={styles.wrapper}>
            <section className={styles.tech}>
                <div>
                    <p>
                        Before even entering college, my interest in programming had already been awakened, what made me watch courses on YouTube, specially about web development and programming logic. This initial passion was the foundation that propelled me to the next step: college.
                        In university, my enthusiasm only grew as I delved deeper into the world of programming. Every challenge I overcame increased my certainty that I was on the right path. Software development wasn't just a career I was pursuing; it was my passion.
                    </p>
                    <p>
                        Over time, I looked for courses to increase my knowledge, that's why I started studying development with JavaScript, which led me to TypeScript, ReactJS and NodeJS. 
                        This portfolio was developed using ReactJS, TypeScript and NextJS. Pensar num texto melhor
                    </p>
                </div>
                <div>

                </div>
            </section>
            <section className={styles.certificates}>
                <div>

                </div>
                <div>
                    <p></p>
                </div>
            </section>
        </main>
    )
}

export default Tech;