import { NextPage } from "next";
import { Technologies, CertificatesCarousel, PagesLayout, ExperienceCard } from "@/src/components/";

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
                            In fact, <span className="highlighted">this portfolio was developed using ReactJS, TypeScript and NextJS</span>, stack which, nowadays, is the one I use the most.
                        </p>
                        <p className="mx-auto mt-8 text-green font-bold text-4xl">
                            Tech Stack
                        </p>
                        <Technologies />
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ut illum sed sunt odio numquam saepe culpa, sequi suscipit soluta dignissimos doloribus quo? Id minus neque velit, soluta ipsum dignissimos. Molestias debitis, totam assumenda esse nostrum at exercitationem blanditiis voluptatem dignissimos repellendus, pariatur sapiente. Libero dicta doloremque dignissimos minus autem?
                        </p>
                    </div>
                </section>
                <CertificatesCarousel />
            </main>
        </PagesLayout>
    )
}

export default Tech;