import { NextPage, Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PagesLayout } from "@/src/components";

export const metadata: Metadata = {
  title: 'Enzo Bozzani - Software Developer',
  description: 'Enzo Bozzani, a software developer (JavaScript, TypeScript, ReactJS, NodeJS), portfolio home page, containing general information. ',
  openGraph: {
    title: 'Enzo Bozzani - Software Developer',
    url: 'https://enzobozzani.vercel.app',
    images: '/website-img.png'
  }
}


const Home: NextPage = () => {
  return (
    <PagesLayout>
      <main className='w-full flex flex-col justify-center items-center gap-8'>
        <div className='flex justify-center items-center'>
          <Image
            src='/profile.jpg'
            alt="Profile Picture"
            width={320}
            height={297}
            className='-mx-8 z-30 w-50 sm:w-64 md:w-96 rounded-full pulseAnimation'
          />
        </div>
        <p className='text-xl sm:text-2xl md:text-4xl text-center text-white font-black'>
          I'm a Software Developer <br />
          JavaScript, TypeScript, ReactJS, NodeJS
        </p>
        <section className='max-w-screen-lg flex flex-col-reverse justify-center items-center mt-12 gap-8'>
          <article className='px-8 w-full flex flex-col justify-center items-center'>
            <p className='text-white text-justify font-medium'>
              Hello, my name is <span className='highlighted'>Enzo Bozzani</span>, I'm 19 years old, and I'm passionate about technology, specially software development.
              Currently, I'm studying <span className='highlighted'>Computer Science</span> at Centro Universitário FEI.
              I'm from Santos (Brazil), so my native language is portuguese, but I also speak english.          </p>
            <p className='text-white text-justify font-medium'>
              I've experience and familiarity with <span className='highlighted'>JavaScript</span>, <span className='highlighted'>TypeScript</span>, <span className='highlighted'>ReactJS</span> and <span className='highlighted'>NodeJS</span>, but also worked with Python, C and Java.
              For more information on my tech stack, go to <Link href={'/experience'} className='text-green underline'>Experience</Link>.
            </p>
          </article>
          <div className='w-full flex justify-center items-center'>
            <Image
              src='/coding.gif'
              alt="gif"
              width={638}
              height={380}
              className='w-2/3 h-auto rounded-2xl led-effect'
            />
          </div>
        </section>
      </main>
    </PagesLayout>
  )
}

export default Home;
