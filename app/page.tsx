import { NextPage } from "next";
import Image from "next/image";
import styles from './page.module.scss';

const Home: NextPage = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.imgs}>
        <Image src='/circuit.svg' alt="circuit right" width={1440} height={500} className={styles.circuit} style={{transform: 'rotate(180deg)'}} />
        <Image src='/profile.jpg' alt="Profile Picture" width={225} height={956} className={styles.titleImg} />
        <Image src='/circuit.svg' alt="circuit left" width={1440} height={500} className={styles.circuit} />
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
            Hello, my name is Enzo Bozzani, I'm 19 years old, and I'm passionate about Software Development. Currently, I'm studying Computer Science at Centro Universitário FEI with the goal of learning more and more about the world of technology. I've been programming with JavaScript for over 1 year, but recently I've been using TypeScript to build more secure applications.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti culpa harum labore id dolorem vitae recusandae debitis tenetur amet aliquid ipsum quas, repellat minima ipsam facilis iure velit cupiditate ratione.
          </p>
        </article>
        <article>

        </article>
      </section>
    </main>
  )
}

export default Home;
