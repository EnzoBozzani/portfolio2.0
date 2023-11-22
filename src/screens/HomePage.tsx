import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { TranslationContext } from "../components/Layout";

export const HomePage: React.FC = () => {
    const { lang } = useContext(TranslationContext);

    return (
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
                {lang === 'en' ? "I'm a Software Developer" : "Sou um Desenvolvedor"} <br />
                JavaScript, TypeScript, ReactJS, NodeJS
            </p>
            <section className='max-w-screen-lg flex flex-col-reverse justify-center items-center mt-12 gap-8'>
                <article className='px-8 w-full flex flex-col justify-center items-center'>
                    <p className='text-white text-justify font-medium'>
                        {
                            lang === 'en' ?
                                (
                                    <>
                                        Hello, my name is <span className='highlighted'>Enzo Bozzani</span>, I'm 19 years old, and I'm passionate about technology, specially software development.
                                        Currently, I'm studying <span className='highlighted'>Computer Science</span> at Centro Universitário FEI.
                                        I'm from Santos (Brazil), so my native language is portuguese, but I also speak english.
                                    </>
                                )
                                :
                                (
                                    <>
                                        Olá, meu nome é <span className='highlighted'>Enzo Bozzani</span>, tenho 19 anos e sou apaixonado por tecnologia, especialmente desenvolvimento de software. Atualmente, estou cursando <span className='highlighted'>Ciência da Computação</span> no Centro Universitário FEI. Sou de Santos (Brasil), então minha língua nativa é o português, mas também falo inglês.
                                    </>
                                )
                        }
                    </p>
                    <br />
                    <p className='text-white text-justify font-medium'>
                        {
                            lang === 'en' ?
                                (
                                    <>
                                        I've experience and familiarity with <span className='highlighted'>JavaScript</span>, <span className='highlighted'>TypeScript</span>, <span className='highlighted'>ReactJS</span> and <span className='highlighted'>NodeJS</span>, but also worked with Python, C and Java.
                                        For more information on my tech stack, go to <Link href={'/experience'} className='text-green underline'>Experience</Link>.
                                    </>
                                )
                                :
                                (
                                    <>
                                        Tenho experiência e familiaridade com <span className='highlighted'>JavaScript</span>, <span className='highlighted'>TypeScript</span>, <span className='highlighted'>ReactJS</span> e <span className='highlighted'>NodeJS</span>, mas também trabalhei com Python, C e Java. Para obter mais informações sobre minha pilha tecnológica, acesse <Link href={'/experience'} className='text-green underline'>Experiência</Link>.
                                    </>
                                )
                        }
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
    )
}