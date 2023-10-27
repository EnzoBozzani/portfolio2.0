import { NextPage } from "next";
import { Technologies, CertificatesCarousel, PagesLayout } from "@/src/components/";

const Tech: NextPage = () => {
    return (
        <PagesLayout>
            <main className='w-full text-white flex flex-col justify-center items-center'>
                <p className='text-green text-5xl font-bold'>Experience</p>
                <section className='flex flex-col justify-center items-center'>
                    <div>
                        <Technologies />
                    </div>
                    <div className='w-full px-8'>
                        <p className='text-justify'>
                            Before even entering college, my interest in programming had already been awakened, what made me watch courses on YouTube, specially about web development and programming logic. This initial passion was the foundation that propelled me to the next step: college.
                            In university, my enthusiasm only grew as I delved deeper into the world of programming. Every challenge I overcame increased my certainty that I was on the right path. <span className='highlighted'>Software development wasn't just a career I was pursuing; it was my passion.</span>
                        </p>
                        <p className='text-justify'>
                            Over time, I looked for courses to increase my knowledge, that's why I started studying development with JavaScript, which led me to TypeScript, ReactJS and NodeJS.
                            In fact, <span className="highlighted">this portfolio was developed using ReactJS, TypeScript and NextJS</span>, stack which, nowadays, is the one I use the most.
                        </p>
                    </div>
                </section>
                <CertificatesCarousel />
            </main>
        </PagesLayout>
    )
}

export default Tech;