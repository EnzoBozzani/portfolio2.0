import { NextPage } from "next";
import Image from "next/image";
import styles from './page.module.scss';
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.imgs}>
        <Image src='/profile.jpg' alt="Profile Picture" width={225} height={956} className={styles.titleImg} />
      </div>
      <p className={styles.titleText}>
        I'm a Software Developer <br />
        JavaScript, TypeScript, ReactJS, NodeJS
      </p>
      <section>
        <article>
          <p className={styles.sectionTitle}>
            About me
          </p>
          <p>
            Hello, my name is <span className='highlighted'>Enzo Bozzani</span>, I'm 19 years old, and I'm passionate about technology, specially software development. 
            Currently, I'm studying <span className='highlighted'>Computer Science</span> at Centro Universitário FEI. 
            I'm from Santos (Brazil), so my native language is portuguese, but I also speak english.          </p>
          <p>
            I've experience and familiarity with <span className='highlighted'>JavaScript</span>, <span className='highlighted'>TypeScript</span>, <span className='highlighted'>ReactJS</span> and <span className='highlighted'>NodeJS</span>, but also worked with Python, C and Java. 
            For more information on my tech stack, go to <Link href={'/tech'}>Tech Stack</Link>.
          </p>
        </article>
        <div>
          <Image src='/coding.gif' alt="gif" width={500} height={400}/>
        </div>
      </section>
    </main>
  )
}

export default Home;
