import { NextPage } from "next";
import Image from "next/image";
import styles from './page.module.scss';

const Home: NextPage = () => {
  return (
    <main className={styles.wrapper}>
      <Image src='/profile.jpg' alt="Profile Picture" width={225} height={956} className={styles.titleImg} />
      <p className={styles.titleText}>
        I'm a Software Developer <br />
        JavaScript, TypeScript, ReactJS, NodeJS
      </p>
      <section>
        <p className={styles.sectionTitle}>
          About me
        </p>
        <p>
          Hello, my name is Enzo Bozzani, I'm 19 years old, and I'm passionate about Software Development. Currently, I'm studying Computer Science at Centro Universitário FEI with the goal of learning more and more about the world of technology. I've been programming with JavaScript for over 1 year, but recently I've been using TypeScript to build more secure applications.
        </p>
      </section>
    </main>
  )
}

export default Home;
