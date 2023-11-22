import { useContext } from "react";
import { TranslationContext } from "../components/Layout";
import { ExperienceCard, Technologies, CertificatesSlide } from "../components";

export const ExperiencePage: React.FC = () => {
    const { lang } = useContext(TranslationContext);

    return (
        <main className='w-full text-white flex flex-col justify-center items-center'>
            <p className='text-green text-5xl font-bold'>{lang === 'en' ? 'Experience' : "Experiência"}</p>
            <section className='max-w-screen-xl flex flex-col justify-center items-center'>
                <ExperienceCard />
                <div className='w-full px-8 flex flex-col'>
                    <p className='text-justify'>
                        {
                            lang === 'en' ?
                                (<>
                                    Before even entering college, my interest in programming had already been awakened, what made me watch courses on YouTube, specially about web development and programming logic. This initial passion was the foundation that propelled me to the next step: college.
                                    In university, my enthusiasm only grew as I delved deeper into the world of programming. Every challenge I overcame increased my certainty that I was on the right path. <span className='highlighted'>Software development wasn't just a career I was pursuing, it was my passion.</span>
                                </>)
                                :
                                (<>
                                    Antes mesmo de entrar na faculdade, meu interesse em programação já havia sido despertado, o que me levou a assistir cursos no YouTube, especialmente sobre desenvolvimento web e lógica de programação. Essa paixão inicial foi a base que me impulsionou para o próximo passo: a faculdade.
                                    Na universidade, meu entusiasmo só cresceu à medida que mergulhei mais fundo no mundo da programação. Cada desafio superado aumentava minha certeza de que eu estava no caminho certo. <span className="highlighted">O desenvolvimento de software não era apenas uma carreira que eu estava seguindo, era minha paixão.</span>
                                </>)
                        }
                    </p>
                    <br />
                    <p className='text-justify'>
                        {lang === 'en' ?
                            (<>Over time, I looked for courses to increase my knowledge, that's why I started studying development with JavaScript, which led me to TypeScript, ReactJS and NodeJS.
                                In fact, <span className="highlighted">this portfolio was developed using ReactJS, TypeScript, Tailwind and NextJS</span>, stack which, nowadays, is the one I use the most.
                            </>)
                            :
                            (<>
                                Ao longo do tempo, procurei por cursos para aumentar meu conhecimento, por isso comecei a estudar desenvolvimento com JavaScript, o que me levou ao TypeScript, ReactJS e NodeJS.
                                Inclusive, <span className="highlighted">este portfólio foi desenvolvido usando ReactJS, TypeScript, Tailwind e NextJS</span>, stack que, atualmente, é a que eu mais utilizo.
                            </>)
                        }
                    </p>
                    <p className="mx-auto mt-8 text-green font-bold text-4xl">
                        Tech Stack
                    </p>
                    <Technologies />
                    <p className="text-justify">
                        {lang === 'en' ?
                            (<>
                                As a developer, my tech stack is a well-rounded combination of web development technologies.
                                I have hands-on experience with front-end technologies such as <span className="highlighted">HTML</span>, <span className="highlighted">CSS</span>, <span className="highlighted">SASS</span>, <span className="highlighted">BootStrap</span>,
                                and <span className="highlighted">Tailwind</span>, allowing me to craft visually appealing and responsive user interfaces.
                                In the realm of <span className="highlighted">JavaScript</span>, I'm proficient with both <span className="highlighted">vanilla JavaScript</span> and <span className="highlighted">TypeScript</span>, and I specialize in
                                building interactive web applications using the <span className="highlighted">React</span> library.
                                For version control, I'm used to work with <span className="highlighted">Git & GitHub</span>.
                                On the back end, I'm well-versed in <span className="highlighted">NodeJS</span> and have worked with both NoSQL databases
                                like <span className="highlighted">MongoDB</span> and <span className="highlighted">relational databases using NodeJS</span>, providing me with a full-stack development capability.
                            </>)
                            :
                            (
                                <>
                                    Como desenvolvedor, minha tech stack é uma combinação abrangente de tecnologias de desenvolvimento web.
                                    Tenho experiência prática com tecnologias front-end como <span className="highlighted">HTML</span>, <span className="highlighted">CSS</span>, <span className="highlighted">SASS</span>, <span className="highlighted">BootStrap</span> e <span className="highlighted">Tailwind</span>, permitindo-me criar interfaces de usuário visualmente atraentes e responsivas.
                                    No universo do <span className="highlighted">JavaScript</span>, sou proficiente tanto em <span className="highlighted">JavaScript puro</span> quanto em <span className="highlighted">TypeScript</span>, e especializo-me na construção de aplicações web interativas usando a biblioteca <span className="highlighted">React</span>.
                                    Quanto ao controle de versão, estou acostumado a trabalhar com <span className="highlighted">Git & GitHub</span>.
                                    No back end, tenho proficiência em <span className="highlighted">NodeJS</span> e trabalhei tanto com bancos de dados NoSQL como <span className="highlighted">MongoDB</span> quanto com bancos de dados relacionais usando <span className="highlighted">NodeJS</span>, proporcionando-me uma capacidade de desenvolvimento full-stack.
                                </>
                            )
                        }
                    </p>
                </div>
            </section>
            <p className="mx-auto mt-24 mb-0 sm:mb-12 text-green font-bold text-4xl">
                {
                    lang === 'en' ?
                        'Certificates'
                        :
                        'Certificados'
                }
            </p>
            <CertificatesSlide />
        </main>
    )
}