import { useContext } from "react";
import { ProjectCard } from "../components"
import { TranslationContext } from "../components/Layout";

type Project = {
    title: string;
    url: string;
    textContent: string;
    icons: React.ReactNode;
}

export const ProjectsPage: React.FC = () => {
    const { lang } = useContext(TranslationContext);

    const projects: Project[] = [
        {
            title: 'OneBitFlix - Frontend',
            url: 'https://github.com/EnzoBozzani/onebitflix-frontend',
            textContent: lang === 'en' ?
                'The frontend for an online course platform, crafted with React, TypeScript, NextJS, and SCSS, ensures a seamless user experience. Featuring an enticing landing page for user attraction, it incorporates user-friendly authentication, showcasing new releases, featured and popular courses. Each course, with dedicated pages and episodes, creates a comprehensive learning environment, enhancing user discovery and navigation.'
                :
                'O frontend para uma plataforma de cursos online, desenvolvido com React, TypeScript, NextJS e SCSS, garante uma experiência do usuário fluida. Apresentando uma página inicial atraente para atrair usuários, ele incorpora uma autenticação amigável ao usuário, exibindo novos lançamentos, cursos em destaque e populares. Cada curso, com páginas e episódios dedicados, cria um ambiente de aprendizado abrangente, aprimorando a descoberta e a navegação do usuário.'
            ,
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
            url: 'https://github.com/EnzoBozzani/recipes-website',
            textContent: lang === 'en' ?
                'The website, developed with React, TypeScript, Tailwind CSS, and Vite, serves as a dynamic platform for exploring a variety of recipes sourced from TheMealDB API. It includes a page with recommended recipes, each presented on its own page with detailed ingredient and preparation information. The site also offers robust search functionality, allowing users to find recipes by name, first letter, or ingredient. This combination of technologies creates a user-friendly and comprehensive resource for cooking enthusiasts seeking culinary inspiration.'
                :
                'O site, desenvolvido com React, TypeScript, Tailwind CSS e Vite, atua como uma plataforma dinâmica para explorar uma variedade de receitas provenientes da API TheMealDB. Ele inclui uma página com receitas recomendadas, cada uma apresentada em sua própria página com informações detalhadas sobre ingredientes e preparo. O site também oferece uma funcionalidade de pesquisa robusta, permitindo que os usuários encontrem receitas por nome, primeira letra ou ingrediente. Essa combinação de tecnologias cria um recurso abrangente e amigável para entusiastas da culinária em busca de inspiração gastronômica.'
            ,
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
        },
        {
            title: 'OneBitFlix - Backend',
            url: 'https://github.com/EnzoBozzani/onebitflix-backend',
            textContent: lang === 'en' ?
                'API development for an online courses platform and admin panel, featuring auth endpoints (login, registration), courses (newest, liked, featured, search), categories (all, by category), episodes (streaming), favorite courses (list, add, remove), likes (add, remove), and user-related endpoints (watchlist, details). Developed with NodeJS, TypeScript, AdminJS, Express, Postgres, and Sequelize.'
                :
                'Desenvolvimento de API para uma plataforma de cursos online e painel de administração, apresentando endpoints de autenticação (login, registro), cursos (mais recentes, curtidos, em destaque, busca), categorias (todas, por categoria), episódios (transmissão), cursos favoritos (lista, adição, remoção), curtidas (adição, remoção) e endpoints relacionados ao usuário (lista de assistidos, detalhes). Desenvolvido com NodeJS, TypeScript, AdminJS, Express, Postgres e Sequelize.'
            ,
            icons: <div className="flex justify-center items-center gap-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="38px" height="38px" fillRule="nonzero"><g fill='#ffffff5e' fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                        <g transform="scale(5.12,5.12)"><path d="M45,4h-40c-0.553,0 -1,0.448 -1,1v40c0,0.552 0.447,1 1,1h40c0.553,0 1,-0.448 1,-1v-40c0,-0.552 -0.447,-1 -1,-1zM29,26.445h-5v15.555h-4v-15.555h-5v-3.445h14zM30.121,41.112v-4.158c0,0 2.271,1.712 4.996,1.712c2.725,0 2.62,-1.782 2.62,-2.026c0,-2.586 -7.721,-2.586 -7.721,-8.315c0,-7.791 11.25,-4.717 11.25,-4.717l-0.14,3.704c0,0 -1.887,-1.258 -4.018,-1.258c-2.131,0 -2.9,1.013 -2.9,2.096c0,2.795 7.791,2.516 7.791,8.141c0.001,8.664 -11.878,4.821 -11.878,4.821z"></path></g>
                    </g>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="38px" height="38px" fillRule="nonzero"><g fill='#ffffff5e' fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                        <g transform="scale(8,8)"><path d="M15.99414,3c-0.365,0 -0.72992,0.08953 -1.04492,0.26953l-9.91016,5.7207c-0.64,0.37 -1.03906,1.07055 -1.03906,1.81055v10.37891c0,0.75 0.39906,1.44055 1.03906,1.81055l2.60156,1.5c1.26,0.62 1.7093,0.61914 2.2793,0.61914c1.87,0 2.93945,-1.12984 2.93945,-3.08984v-10.70898c0,-0.16 -0.12906,-0.29102 -0.28906,-0.29102h-1.25c-0.17,0 -0.29101,0.13102 -0.29101,0.29102v10.69922c0,0.88 -0.90891,1.73977 -2.37891,1.00977l-2.7207,-1.57031c-0.1,-0.05 -0.16016,-0.15953 -0.16016,-0.26953v-10.36914c0,-0.12 0.06016,-0.22125 0.16016,-0.28125l9.91016,-5.71875c0.09,-0.06 0.21055,-0.06 0.31055,0l9.91016,5.71875c0.1,0.06 0.16016,0.16148 0.16016,0.27148v10.37891c0,0.11 -0.06039,0.21953 -0.15039,0.26953l-9.91992,5.73047c-0.09,0.05 -0.22055,0.05 -0.31055,0l-2.55078,-1.50977c-0.07,-0.05 -0.16828,-0.05953 -0.23828,-0.01953c-0.71,0.4 -0.84,0.44969 -1.5,0.67969c-0.16,0.05 -0.41016,0.14969 0.08984,0.42969l3.30859,1.96094c0.32,0.18 0.68102,0.2793 1.04101,0.2793c0.37,0 0.72883,-0.0993 1.04883,-0.2793l9.92188,-5.73047c0.64,-0.37 1.03906,-1.06055 1.03906,-1.81055v-10.36914c0,-0.75 -0.39906,-1.44055 -1.03906,-1.81055l-9.92188,-5.73047c-0.315,-0.18 -0.67992,-0.26953 -1.04492,-0.26953zM18.66016,11.00586c-2.83,0 -4.51953,1.19922 -4.51953,3.19922c0,2.17 1.67844,2.76906 4.39844,3.03906c3.25,0.32 3.5,0.80141 3.5,1.44141c0,1.1 -0.88852,1.57031 -2.97852,1.57031c-2.63,0 -3.21039,-0.66094 -3.40039,-1.96094c-0.02,-0.14 -0.1393,-0.24023 -0.2793,-0.24023h-1.29101c-0.16,0 -0.2793,0.13125 -0.2793,0.28125c0,1.67 0.91,3.6582 5.25,3.6582c3.14,0 4.93945,-1.23844 4.93945,-3.39844c0,-2.14 -1.45023,-2.71109 -4.49023,-3.12109c-3.09,-0.4 -3.40039,-0.61008 -3.40039,-1.33008c0,-0.6 0.27078,-1.38867 2.55078,-1.38867c2.03,0 2.78961,0.43859 3.09961,1.80859c0.03,0.13 0.1393,0.23047 0.2793,0.23047h1.29102c0.08,0 0.14898,-0.03961 0.20898,-0.09961c0.05,-0.05 0.08031,-0.1307 0.07031,-0.2207c-0.2,-2.36 -1.76922,-3.46875 -4.94922,-3.46875z"></path></g>
                    </g>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="38px" height="38px" fillRule="nonzero"><g fill='#ffffff5e' fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                        <g transform="scale(5.12,5.12)"><path d="M35.19922,2.10156c-1.5,0 -2.80078,0.29688 -4,0.59766c2.10156,0.89844 3.40234,2 4.10156,2.5c1.60156,1.39844 2.5,2.80078 4.10156,5.10156c0.29688,0.5 0.79688,1.19922 1.09766,2.29688c0.30078,1 0.30078,1.80078 0.30078,2.60156c0,1.10156 -0.10156,2 -0.20312,2.89844c-0.09766,0.70313 -0.09766,1.00391 -0.19531,1.20313c0,0.10156 0,0.19922 -0.10156,0.39844c0,0.5 0,0.70313 0.10156,1.10156c0,0.39844 0.09766,0.80078 0.09766,1.5c0.10156,1.30078 0.10156,2.19922 -0.09766,3.29688v0.40234c-0.20312,0.89844 -0.40234,1.80078 -0.90234,2.59766c0.10156,0.20313 0.19922,0.30078 0.30078,0.5c0.5,-0.69922 0.89844,-1.39844 1.29688,-2.19531c1.20313,-2.20312 1.90234,-4.10156 2.40234,-5.5c0.89844,-2.60156 1.39844,-4.50391 1.69922,-5.90234c0.69922,-3 0.80078,-4.39844 0.5,-6c0,-0.5 -0.19922,-1.40234 -0.69922,-2.30078c-1.10156,-2 -2.80078,-2.89844 -4,-3.5c-0.80078,-0.39844 -2.90234,-1.5 -5.80078,-1.59766zM13.53516,2.54297c-1.15234,-0.02344 -2.55859,0.10547 -4.13672,0.85547c-0.5,0.20313 -2,0.90234 -3.19922,2.5c-0.80078,1 -1.39844,2.5 -1.69922,4.19922c-0.30078,1.5 -0.40234,3.30469 0.19922,6.70313c0.39844,2.39844 0.80078,4 1.60156,7.29688c0.10156,0.40234 0.69922,2.20313 2,6.20313l0.09766,0.19922c0.20313,0.69922 0.80078,2.19922 2.10156,3.69922c0.89844,1 1.69922,1.60156 2.40234,1.60156h0.19531c1.30078,0 2.20313,-1 3,-1.80078c0,-0.10156 1.90234,-2.39844 2.60156,-3.19922c-0.10156,-0.10156 -0.29687,-0.10156 -0.39844,-0.20312c-1.19922,-0.69922 -2.10156,-1.79687 -2.80078,-3c-1.19922,-2.19922 -1.10156,-4.39844 -0.90234,-5.5l0.10156,-1.69531c-0.39844,-2.70312 -0.29687,-5.30078 0.20313,-7.90234c0.39844,-2.19922 0.89844,-4.39844 2.69531,-6.69922c0.60156,-0.80078 1.30078,-1.5 2,-2c-1.59766,-0.69922 -3.29687,-1.10156 -5,-1.19922c-0.32422,-0.02734 -0.67969,-0.05078 -1.0625,-0.05859zM26.09766,3.39844c-0.5,0 -1,0 -1.5,0.10156c-2,0.39844 -3.89844,1.5 -5.39844,3.39844c-1.5,1.90234 -1.89844,3.69922 -2.29687,5.80078c-0.20312,0.80078 -0.20312,1.5 -0.30469,2.30078c0.60156,-0.5 1.40234,-1.10156 2.60156,-1.40234c0.69922,-0.19922 2.5,-0.79687 4,0.10156c0.5,0.30078 1.19922,0.90234 1.89844,2.60156c1.5,4.19922 0.00391,8.5 -0.19531,8.89844c-0.10156,0.39844 -0.30078,0.69922 -0.40234,0.89844c-0.19922,0.5 -0.39844,0.90234 -0.59766,1.70313c-0.10156,0.69922 -0.20312,1.30078 -0.20312,2c0.30078,0 0.60156,0.09766 0.89844,0.29688c0.5,0.5 0.60156,1.20313 0.70313,1.5c0.19922,1.60156 0.19922,3.60156 0.19922,5.60156c0,1.60156 0,3.10156 0.09766,4.10156c0.20313,2.30078 0.90234,3.89844 1.90234,4.69922c0.69922,0.60156 1.59766,0.59766 2.09766,0.69922h0.20313c1.5,0 3.89844,-1 4.79688,-2.39844c0.5,-0.80078 0.70313,-1.5 0.90234,-2.5c0.10156,-0.60156 0.09766,-0.89844 0.19922,-1.5c0,-0.30078 0.10156,-0.80078 0.10156,-1.39844c0,-0.5 0.09766,-1.10156 0.19922,-1.80469c0.10156,-1.69922 0.39844,-3.69531 0.5,-4.79687c0.10156,-1.30078 0.69922,-2.40234 1.19922,-3.10156c-0.69922,-0.10156 -1.39844,-0.69922 -1.79687,-1.69922c-0.60156,-1.10156 -0.70312,-1.40234 -0.80469,-1.90234c-0.09766,-0.39844 -0.29687,-0.89844 -1,-2.39844c-1.5,-3.39844 -1.69531,-4.39844 -1.69531,-5.19922c-0.10156,-1.10156 -0.20312,-2.59766 1,-3.59766c1.79688,-1.60156 4.09766,-1.5 5.29688,-1.10156v-0.20312c-0.19922,-0.79687 -0.59766,-1.39844 -0.89844,-1.79687c-1.5,-2.30078 -2.30078,-3.5 -3.70312,-4.69922c-0.59766,-0.5 -2.09766,-1.70312 -4.29687,-2.5c-1,-0.30078 -2.20312,-0.70312 -3.70312,-0.70312zM37.15234,15.125c-0.72656,-0.05078 -1.65234,0.07422 -2.45312,0.77734c-0.39844,0.39844 -0.39844,1.19922 -0.29687,1.89844c0,0.5 0.09766,1.19922 1.59766,4.60156c0.69922,1.59766 0.89844,2.09766 1,2.5c0.10156,0.39844 0.19922,0.59766 0.80078,1.69531c0.10156,0.20313 0.19922,0.40234 0.39844,0.60156c0.19922,-0.30078 0.30078,-0.80078 0.39844,-1.60156l0.10156,-0.29687c0.19922,-0.89844 0.10156,-1.60156 0.10156,-2.80078c0,-0.60156 -0.10156,-1 -0.10156,-1.30078c-0.10156,-0.5 -0.10156,-0.89844 -0.10156,-1.5c-0.19922,-0.30078 -0.19922,-0.39844 -0.09766,-0.60156c0,-0.19922 0.09766,-0.49609 0.19922,-1.09766c0.10156,-0.80078 0.20313,-1.5 0.20313,-2.30078c-0.20312,-0.10156 -0.30078,-0.19922 -0.5,-0.29687c0,0 -0.52734,-0.22656 -1.25,-0.27734zM21.51563,15.51953c-0.63672,-0.07422 -1.36719,0.13281 -1.81641,0.28125c-1.10156,0.30078 -1.79687,1 -2.29687,1.39844c-0.30078,0.30078 -0.60156,0.60156 -0.90234,1c0,0.69922 0.09766,1.40234 0.19922,2.10156v0.10156l-0.19922,2c-0.19922,0.89844 -0.30078,2.59766 0.69922,4.29688c0.5,1 1.20313,1.80078 2.10156,2.30078c0.60156,0.39844 1.39844,0.69922 2.29688,0.90234c0,-0.70312 0.10156,-1.50391 0.20313,-2.20312c0.19922,-1 0.39844,-1.5 0.69922,-2.10156c0.10156,-0.29687 0.19922,-0.49609 0.40234,-0.79687c0.09766,-0.30078 1.49609,-4.10156 0.19531,-7.60156c-0.29687,-0.80078 -0.59766,-1.30078 -1,-1.5c-0.17187,-0.10156 -0.375,-0.15625 -0.58203,-0.17969zM36.1875,16.08984c0.26172,-0.01562 0.51172,0.00781 0.61328,0.10938c0.30078,0.19922 -0.10156,0.69922 -0.20312,0.80078c-0.09766,0.10156 -0.29687,0.30078 -0.59766,0.40234c-0.39844,0.09766 -0.69922,-0.20312 -0.80078,-0.20312c-0.10156,-0.10156 -0.39844,-0.39844 -0.29687,-0.69922c0.09766,-0.19922 0.19922,-0.19922 0.59766,-0.30078c0.14844,-0.05078 0.42578,-0.09766 0.6875,-0.10937zM21.15625,16.91797c0.33594,-0.02344 0.61719,0.10547 0.84375,0.17969c0.30078,0.10156 0.59766,0.20313 0.59766,0.40234c0.10156,0.30078 -0.19531,0.5 -0.29687,0.59766c-0.30078,0.30078 -0.80078,0.30469 -0.80078,0.30469c-0.5,0 -0.80078,-0.30078 -1,-0.60156c-0.10156,-0.10156 -0.19922,-0.30078 -0.09766,-0.5c0.09766,-0.19922 0.29688,-0.30078 0.39844,-0.30078c0.125,-0.05078 0.24219,-0.07422 0.35547,-0.08203zM39.5,30c-0.5,0.69922 -1.19922,1.60156 -1.30078,2.80078c0,0.19922 0,0.30078 -0.10156,0.5c0.80078,0.19922 1.50391,0.19922 2.20313,0.10156c1.60156,-0.20312 2.69922,-1.00391 2.89844,-1.20312c0.69922,-0.5 1.60156,-1.5 1.39844,-1.89844c-0.09766,-0.19922 -0.39844,-0.10156 -2,0c-0.39844,0 -1.59766,0.30078 -2.39844,0.10156h-0.19922c-0.19922,-0.10156 -0.39844,-0.20312 -0.5,-0.40234zM22.09766,32c-0.19922,0.30078 -0.49609,0.5 -0.69531,0.69922c-0.80078,0.5 -1.80469,0.90234 -2.80469,1.10156c-0.89844,0.30078 -1.39844,0.30078 -1.39844,0.60156c-0.10156,0.39844 0.89844,0.89844 1.39844,1.09766c1.70313,0.69922 3.40234,0.30078 3.70313,0.19922c0.19922,-0.10156 0.69922,-0.30078 1.19922,-0.60156c0,-1.09766 -0.09766,-2.09766 -0.19922,-2.89844v-0.10156h-0.10156c-0.30078,0 -0.69922,0.00391 -1.10156,-0.09766z"></path></g>
                    </g>
                </svg>
            </div>
        },
        {
            title: 'GitHub User Search',
            url: 'https://github.com/EnzoBozzani/github-api',
            textContent: lang === 'en' ?
                'GitHub User Search is a React and TypeScript application leveraging the GitHub API to fetch user information, emphasizing social details, repositories, and general user info. The user-friendly interface is enhanced with Bootstrap and SASS for a seamless experience.'
                :
                'O GitHub User Search é uma aplicação em React e TypeScript que utiliza a API do GitHub para buscar informações de usuários, destacando detalhes sociais, repositórios e informações gerais do usuário. A interface amigável é aprimorada com Bootstrap e SASS para uma experiência fluida'
            ,
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
            </div>
        }
    ]


    return (
        <main className="flex flex-col w-full justify-center items-center">
            <p className="text-green text-5xl font-bold mb-2">
                {
                    lang === 'en' ?
                        'Projects'
                        :
                        'Projetos'
                }
            </p>
            <p className='text-gray font-light mb-12 text-center mx-2'>
                {
                    lang === 'en' ?
                        'All projects can be found at: '
                        :
                        'Todos projetos estão em: '
                }
                <a className="underline hover:text-green" target="_blank" href="https://github.com/EnzoBozzani?tab=repositories">https://github.com/EnzoBozzani?tab=repositories</a>
            </p>
            <div className="max-w-screen-xl flex flex-col justify-center items-center mx-8 gap-8">
                {projects.map((project: Project, i) => (
                    <ProjectCard
                        title={project.title}
                        textContent={project.textContent}
                        repoUrl={project.url}
                        key={i}
                    >
                        {project.icons}
                    </ProjectCard>
                ))}
            </div>
        </main>
    )
}