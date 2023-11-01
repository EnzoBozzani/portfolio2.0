import { NextPage } from "next";
import { Technologies, PagesLayout, ExperienceCard, CertificatesSlide } from "@/src/components/";

const Tech: NextPage = () => {
    return (
        <PagesLayout>
            <main className='w-full text-white flex flex-col justify-center items-center'>
                <p className='text-green text-5xl font-bold'>Experience</p>
                <section className='max-w-screen-xl flex flex-col justify-center items-center'>
                    <ExperienceCard />
                    <div className='w-full px-8 flex flex-col'>
                        <p className='text-justify'>
                            Before even entering college, my interest in programming had already been awakened, what made me watch courses on YouTube, specially about web development and programming logic. This initial passion was the foundation that propelled me to the next step: college.
                            In university, my enthusiasm only grew as I delved deeper into the world of programming. Every challenge I overcame increased my certainty that I was on the right path. <span className='highlighted'>Software development wasn't just a career I was pursuing; it was my passion.</span>
                        </p>
                        <br />
                        <p className='text-justify'>
                            Over time, I looked for courses to increase my knowledge, that's why I started studying development with JavaScript, which led me to TypeScript, ReactJS and NodeJS.
                            In fact, <span className="highlighted">this portfolio was developed using ReactJS, TypeScript, Tailwind and NextJS</span>, stack which, nowadays, is the one I use the most.
                        </p>
                        <p className="mx-auto mt-8 text-green font-bold text-4xl">
                            Tech Stack
                        </p>
                        <Technologies />
                        <p className="text-justify">
                            As a developer, my tech stack is a well-rounded combination of web development technologies.
                            I have hands-on experience with front-end technologies such as <span className="highlighted">HTML</span>, <span className="highlighted">CSS</span>, <span className="highlighted">SASS</span>, <span className="highlighted">BootStrap</span>,
                            and <span className="highlighted">Tailwind</span>, allowing me to craft visually appealing and responsive user interfaces.
                            In the realm of <span className="highlighted">JavaScript</span>, I'm proficient with both <span className="highlighted">vanilla JavaScript</span> and <span className="highlighted">TypeScript</span>, and I specialize in
                            building interactive web applications using the <span className="highlighted">React</span> library.
                            For version control, I'm used to work with <span className="highlighted">Git & GitHub</span>.
                            On the back end, I'm well-versed in <span className="highlighted">NodeJS</span> and have worked with both NoSQL databases
                            like <span className="highlighted">MongoDB</span> and <span className="highlighted">relational databases using NodeJS</span>, providing me with a full-stack development capability.
                        </p>
                    </div>
                </section>
                <p className="mx-auto mt-12 text-green font-bold text-4xl">
                    Certificates
                </p>
                <CertificatesSlide />
            </main>
        </PagesLayout>
    )
}

export default Tech;