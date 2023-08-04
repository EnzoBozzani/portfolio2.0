import { NextPage } from "next";
import Image from "next/image";
import styles from './page.module.scss';

const Home: NextPage = () => {
  return (
    <main className={styles.wrapper}>
      <Image src='/profile.jpg' alt="Profile Picture" width={225} height={956}/>
      <p>
        I'm a Software Developer <br />JavaScript, TypeScript, React ????
      </p>
    </main>
  )
}

export default Home;
