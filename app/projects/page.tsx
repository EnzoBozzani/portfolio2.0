import { NextPage } from "next";
import { PagesLayout, ProjectCard } from "@/src/components";

type Project = {
    title: string;
    textContent: string;
    icons: React.ReactNode;
}

const projects: Project[] = [
    {
        title: 'OneBitFlix - Frontend',
        textContent: 'The frontend project is the interface for an online course platform, designed to provide a seamless and engaging user experience. Built using React, TypeScript, NextJS, and SCSS, the platform features a compelling landing page aimed at attracting new users. It incorporates user authentication with a user-friendly registration and login system. The platform showcases new releases, featured courses, and the most popular ones, enhancing user discovery and navigation. Each course has its dedicated page, along with individual episodes, offering a comprehensive and organized learning environment for users.',
        icons: <div className='flex justify-center items-center gap-1'>
            <svg
                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="38px" height="38px" fillRule="nonzero"><g fill='#ffffff5e' fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                    <g transform="scale(5.33333,5.33333)"><path d="M24,34c-12.9,0 -23,-4.4 -23,-10c0,-5.6 10.1,-10 23,-10c12.9,0 23,4.4 23,10c0,5.6 -10.1,10 -23,10zM24,16c-12.6,0 -21,4.1 -21,8c0,3.9 8.4,8 21,8c12.6,0 21,-4.1 21,-8c0,-3.9 -8.4,-8 -21,-8z"></path><path d="M15.1,44.6c-1,0 -1.8,-0.2 -2.6,-0.7c-4.9,-2.8 -3.6,-13.7 2.8,-24.9v0c3,-5.2 6.7,-9.6 10.3,-12.4c3.9,-3 7.4,-3.9 9.8,-2.5c2.5,1.4 3.4,4.9 2.8,9.8c-0.6,4.6 -2.6,10 -5.6,15.2c-3,5.2 -6.7,9.6 -10.3,12.4c-2.6,2 -5.1,3.1 -7.2,3.1zM32.9,5.4c-1.6,0 -3.7,0.9 -6,2.7c-3.4,2.7 -6.9,6.9 -9.8,11.9v0c-6.3,10.9 -6.9,20.3 -3.6,22.2c1.7,1 4.5,0.1 7.6,-2.3c3.4,-2.7 6.9,-6.9 9.8,-11.9c2.9,-5 4.8,-10.1 5.4,-14.4c0.5,-4 -0.1,-6.8 -1.8,-7.8c-0.5,-0.2 -1,-0.4 -1.6,-0.4z"></path><path d="M33,44.6c-5,0 -12.2,-6.1 -17.6,-15.6c-6.5,-11.2 -7.8,-22.1 -2.9,-24.9v0c4.9,-2.8 13.7,3.7 20.2,14.9c3,5.2 5,10.6 5.6,15.2c0.7,4.9 -0.3,8.3 -2.8,9.8c-0.8,0.4 -1.6,0.6 -2.5,0.6zM13.5,5.8c-3.3,1.9 -2.7,11.3 3.6,22.2c6.3,10.9 14.1,16.1 17.4,14.2c1.7,-1 2.3,-3.8 1.8,-7.8c-0.6,-4.3 -2.5,-9.4 -5.4,-14.4c-6.3,-10.9 -14.1,-16.1 -17.4,-14.2z"></path><circle cx="24" cy="24" r="4"></circle></g>
                </g>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="38px" height="38px" fillRule="nonzero"><g fill='#ffffff5e' fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                    <g transform="scale(5.12,5.12)"><path d="M45,4h-40c-0.553,0 -1,0.448 -1,1v40c0,0.552 0.447,1 1,1h40c0.553,0 1,-0.448 1,-1v-40c0,-0.552 -0.447,-1 -1,-1zM29,26.445h-5v15.555h-4v-15.555h-5v-3.445h14zM30.121,41.112v-4.158c0,0 2.271,1.712 4.996,1.712c2.725,0 2.62,-1.782 2.62,-2.026c0,-2.586 -7.721,-2.586 -7.721,-8.315c0,-7.791 11.25,-4.717 11.25,-4.717l-0.14,3.704c0,0 -1.887,-1.258 -4.018,-1.258c-2.131,0 -2.9,1.013 -2.9,2.096c0,2.795 7.791,2.516 7.791,8.141c0.001,8.664 -11.878,4.821 -11.878,4.821z"></path></g>
                </g>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="38px" height="38px" fillRule="nonzero"><g fill='#ffffff5e' fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                    <g transform="scale(5.12,5.12)"><path d="M43.03,27.802c-1.747,0.009 -3.261,0.429 -4.53,1.054c-0.464,-0.926 -0.934,-1.741 -1.013,-2.347c-0.092,-0.707 -0.199,-1.129 -0.088,-1.972c0.111,-0.843 0.599,-2.036 0.591,-2.125c-0.007,-0.089 -0.109,-0.518 -1.117,-0.526c-1.008,-0.007 -1.87,0.194 -1.972,0.46c-0.102,0.266 -0.296,0.865 -0.416,1.49c-0.177,0.914 -2.012,4.174 -3.055,5.879c-0.341,-0.666 -0.631,-1.252 -0.691,-1.716c-0.092,-0.707 -0.199,-1.129 -0.088,-1.972c0.111,-0.843 0.599,-2.036 0.591,-2.125c-0.007,-0.089 -0.109,-0.518 -1.117,-0.526c-1.008,-0.007 -1.87,0.194 -1.972,0.46c-0.102,0.266 -0.21,0.888 -0.416,1.49c-0.207,0.602 -2.647,6.039 -3.286,7.448c-0.326,0.718 -0.609,1.295 -0.809,1.689c-0.001,-0.001 -0.001,-0.002 -0.001,-0.002c0,0 -0.012,0.026 -0.034,0.071c-0.171,0.335 -0.273,0.521 -0.273,0.521c0,0 0.001,0.003 0.003,0.007c-0.136,0.246 -0.281,0.475 -0.353,0.475c-0.05,0 -0.151,-0.656 0.022,-1.555c0.363,-1.886 1.235,-4.828 1.227,-4.929c-0.004,-0.052 0.162,-0.564 -0.57,-0.833c-0.711,-0.26 -0.965,0.174 -1.03,0.175c-0.063,0.001 -0.11,0.153 -0.11,0.153c0,0 0.793,-3.308 -1.512,-3.308c-1.44,0 -3.436,1.576 -4.42,3.004c-0.62,0.338 -1.948,1.063 -3.357,1.837c-0.541,0.297 -1.093,0.601 -1.617,0.89c-0.036,-0.039 -0.071,-0.079 -0.108,-0.118c-2.794,-2.981 -7.958,-5.089 -7.739,-9.096c0.08,-1.457 0.586,-5.293 9.924,-9.946c7.649,-3.812 13.773,-2.763 14.831,-0.438c1.512,3.321 -3.273,9.494 -11.216,10.384c-3.027,0.339 -4.62,-0.834 -5.017,-1.271c-0.417,-0.46 -0.479,-0.481 -0.635,-0.394c-0.254,0.141 -0.093,0.547 0,0.789c0.237,0.617 1.21,1.712 2.87,2.256c1.46,0.479 5.013,0.742 9.311,-0.92c4.813,-1.862 8.571,-7.041 7.468,-11.37c-1.123,-4.403 -8.423,-5.85 -15.332,-3.396c-4.112,1.461 -8.563,3.754 -11.764,6.747c-3.806,3.56 -4.412,6.658 -4.162,7.952c0.889,4.6 7.228,7.595 9.767,9.815c-0.125,0.069 -0.243,0.134 -0.35,0.193c-1.273,0.63 -6.105,3.159 -7.314,5.831c-1.371,3.031 0.218,5.206 1.271,5.499c3.26,0.907 6.606,-0.725 8.404,-3.407c1.798,-2.681 1.578,-6.172 0.753,-7.766c-0.01,-0.02 -0.022,-0.039 -0.032,-0.059c0.329,-0.195 0.664,-0.392 0.996,-0.587c0.648,-0.38 1.284,-0.735 1.836,-1.036c-0.309,0.846 -0.535,1.86 -0.653,3.325c-0.138,1.721 0.567,3.945 1.49,4.82c0.406,0.385 0.895,0.394 1.205,0.394c1.074,0 1.564,-0.893 2.103,-1.95c0.662,-1.296 1.249,-2.804 1.249,-2.804c0,0 -0.737,4.075 1.271,4.075c0.731,0 1.467,-0.949 1.795,-1.432c0.001,0.005 0.001,0.008 0.001,0.008c0,0 0.019,-0.031 0.056,-0.095c0.076,-0.116 0.119,-0.19 0.119,-0.19c0,0 0.002,-0.008 0.004,-0.021c0.294,-0.51 0.946,-1.674 1.924,-3.594c1.263,-2.48 2.475,-5.586 2.475,-5.586c0,0 0.113,0.76 0.482,2.015c0.217,0.739 0.679,1.556 1.043,2.339c-0.293,0.407 -0.473,0.64 -0.473,0.64c0,0 0.002,0.004 0.005,0.012c-0.234,0.311 -0.497,0.646 -0.772,0.974c-0.997,1.188 -2.185,2.544 -2.344,2.936c-0.187,0.461 -0.143,0.801 0.219,1.073c0.264,0.199 0.735,0.23 1.227,0.197c0.896,-0.06 1.527,-0.283 1.838,-0.418c0.485,-0.171 1.05,-0.441 1.58,-0.831c0.978,-0.719 1.568,-1.748 1.512,-3.111c-0.031,-0.751 -0.271,-1.495 -0.574,-2.198c0.089,-0.128 0.178,-0.256 0.267,-0.387c1.542,-2.255 2.738,-4.732 2.738,-4.732c0,0 0.113,0.76 0.482,2.015c0.187,0.636 0.556,1.329 0.887,2.009c-1.45,1.178 -2.349,2.547 -2.662,3.445c-0.577,1.661 -0.125,2.414 0.723,2.585c0.384,0.078 0.927,-0.098 1.335,-0.271c0.508,-0.168 1.118,-0.449 1.688,-0.868c0.978,-0.719 1.919,-1.726 1.862,-3.089c-0.026,-0.62 -0.194,-1.236 -0.422,-1.828c1.229,-0.512 2.821,-0.797 4.848,-0.56c4.349,0.508 5.202,3.223 5.039,4.359c-0.163,1.137 -1.075,1.761 -1.38,1.95c-0.305,0.189 -0.398,0.254 -0.372,0.394c0.037,0.204 0.178,0.196 0.438,0.152c0.358,-0.06 2.283,-0.924 2.366,-3.022c0.104,-2.658 -2.448,-5.583 -6.968,-5.559zM9.512,39.102c-1.44,1.571 -3.453,2.165 -4.316,1.665c-0.932,-0.54 -0.563,-2.854 1.205,-4.521c1.077,-1.016 2.468,-1.952 3.391,-2.529c0.21,-0.126 0.518,-0.312 0.893,-0.537c0.062,-0.035 0.097,-0.055 0.097,-0.055l-0.001,-0.002c0.072,-0.043 0.147,-0.088 0.223,-0.134c0.643,2.374 0.02,4.464 -1.492,6.113zM20.005,31.968c-0.502,1.223 -1.552,4.352 -2.191,4.184c-0.549,-0.144 -0.883,-2.523 -0.11,-4.863c0.389,-1.178 1.22,-2.586 1.709,-3.133c0.786,-0.879 1.652,-1.167 1.862,-0.81c0.269,0.454 -0.955,3.855 -1.27,4.622zM28.675,36.105c-0.213,0.111 -0.408,0.181 -0.498,0.127c-0.067,-0.04 0.088,-0.186 0.088,-0.186c0,0 1.084,-1.167 1.512,-1.698c0.248,-0.309 0.537,-0.676 0.85,-1.086c0.003,0.041 0.004,0.082 0.004,0.122c-0.004,1.398 -1.354,2.341 -1.956,2.721zM35.354,34.582c-0.159,-0.113 -0.132,-0.478 0.389,-1.614c0.205,-0.446 0.672,-1.198 1.485,-1.916c0.094,0.295 0.152,0.578 0.15,0.842c-0.011,1.759 -1.266,2.416 -2.024,2.688z"></path></g>
                </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="38px" height="38px"><path fill="#ffffff5e" d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z" /></svg>
        </div>
    },
    {
        title: 'Recipes Website',
        textContent: 'The website is a dynamic platform that leverages React, TypeScript, Tailwind CSS, and Vite to create an immersive experience for users interested in exploring a diverse range of recipes. The interface includes a page featuring recommended recipes, providing users with culinary inspiration. Each recipe is presented on its dedicated page, offering detailed information about ingredients and preparation instructions. The website also incorporates a robust search functionality, allowing users to explore recipes by name, first letter, or specific ingredient. This combination of technology and features ensures a user-friendly and comprehensive resource for individuals passionate about cooking and discovering new culinary delights.',
        icons: <div className='flex justify-center items-center gap-1'>
            <svg
                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="38px" height="38px" fillRule="nonzero"><g fill='#ffffff5e' fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                    <g transform="scale(5.33333,5.33333)"><path d="M24,34c-12.9,0 -23,-4.4 -23,-10c0,-5.6 10.1,-10 23,-10c12.9,0 23,4.4 23,10c0,5.6 -10.1,10 -23,10zM24,16c-12.6,0 -21,4.1 -21,8c0,3.9 8.4,8 21,8c12.6,0 21,-4.1 21,-8c0,-3.9 -8.4,-8 -21,-8z"></path><path d="M15.1,44.6c-1,0 -1.8,-0.2 -2.6,-0.7c-4.9,-2.8 -3.6,-13.7 2.8,-24.9v0c3,-5.2 6.7,-9.6 10.3,-12.4c3.9,-3 7.4,-3.9 9.8,-2.5c2.5,1.4 3.4,4.9 2.8,9.8c-0.6,4.6 -2.6,10 -5.6,15.2c-3,5.2 -6.7,9.6 -10.3,12.4c-2.6,2 -5.1,3.1 -7.2,3.1zM32.9,5.4c-1.6,0 -3.7,0.9 -6,2.7c-3.4,2.7 -6.9,6.9 -9.8,11.9v0c-6.3,10.9 -6.9,20.3 -3.6,22.2c1.7,1 4.5,0.1 7.6,-2.3c3.4,-2.7 6.9,-6.9 9.8,-11.9c2.9,-5 4.8,-10.1 5.4,-14.4c0.5,-4 -0.1,-6.8 -1.8,-7.8c-0.5,-0.2 -1,-0.4 -1.6,-0.4z"></path><path d="M33,44.6c-5,0 -12.2,-6.1 -17.6,-15.6c-6.5,-11.2 -7.8,-22.1 -2.9,-24.9v0c4.9,-2.8 13.7,3.7 20.2,14.9c3,5.2 5,10.6 5.6,15.2c0.7,4.9 -0.3,8.3 -2.8,9.8c-0.8,0.4 -1.6,0.6 -2.5,0.6zM13.5,5.8c-3.3,1.9 -2.7,11.3 3.6,22.2c6.3,10.9 14.1,16.1 17.4,14.2c1.7,-1 2.3,-3.8 1.8,-7.8c-0.6,-4.3 -2.5,-9.4 -5.4,-14.4c-6.3,-10.9 -14.1,-16.1 -17.4,-14.2z"></path><circle cx="24" cy="24" r="4"></circle></g>
                </g>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="38px" height="38px" fillRule="nonzero"><g fill='#ffffff5e' fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                    <g transform="scale(8.53333,8.53333)"><path d="M25.428,3.333c-0.19,-0.212 -0.461,-0.333 -0.745,-0.333h-19.366c-0.284,0 -0.555,0.121 -0.745,0.333c-0.19,0.212 -0.28,0.495 -0.249,0.777l2.202,19.823c0.044,0.403 0.329,0.74 0.719,0.851l7.48,2.137c0.09,0.026 0.183,0.039 0.275,0.039c0.092,0 0.185,-0.013 0.275,-0.039l7.48,-2.137c0.39,-0.111 0.674,-0.448 0.719,-0.851l2.203,-19.823c0.032,-0.282 -0.058,-0.565 -0.248,-0.777zM20.516,13.074l-0.446,7.285l-5.038,1.647l-5.038,-1.647l-0.191,-3.484h2.55l0.064,1.584l2.615,0.887l2.615,-0.887l0.191,-2.85h-5.612l-0.127,-2.534h5.867l0.191,-2.534h-8.801l-0.191,-2.535h11.67z"></path></g>
                </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="38px" height="38px"><path fill="#ffffff5e" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z" /></svg>
        </div>
    }
]

const Projects: NextPage = () => {
    return (
        <PagesLayout>
            <main className="flex flex-col w-full justify-center items-center">
                <p className="text-green text-5xl font-bold mb-2">
                    Projects
                </p>
                <p className='text-gray font-light mb-12'>
                    All projects can be found at: <a className="underline hover:text-green" target="_blank" href="https://github.com/EnzoBozzani?tab=repositories">https://github.com/EnzoBozzani?tab=repositories</a>
                </p>
                <div className="max-w-screen-xl flex flex-col justify-center items-center mx-8 gap-8">
                    {projects.map((project: Project) => (
                        <ProjectCard
                            title={project.title}
                            textContent={project.textContent}
                            repoUrl='ADICIONAR A URL DE CADA PROJETO'
                        >
                            {project.icons}
                        </ProjectCard>
                    ))}
                </div>
            </main>
        </PagesLayout>
    )
}

export default Projects;