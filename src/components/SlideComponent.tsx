//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { SlideCard } from '.';

const certificates = [
    {
        url: '/html.png',
        title: 'HTML'
    },
    {
        url: '/css.png',
        title: 'CSS'
    },
    {
        url: '/css-moderno.png',
        title: 'Modern CSS'
    },
    {
        url: '/sass.png',
        title: 'SASS'
    },
    {
        url: '/javascript.png',
        title: 'JavaScript'
    },
    {
        url: '/git.png',
        title: 'Git & GitHub'
    },
    {
        url: '/ts.png',
        title: 'TypeScript'
    },
    {
        url: '/react.png',
        title: 'React'
    },
    {
        url: '/nodejs.png',
        title: 'NodeJS'
    },
    {
        url: '/mongo.png',
        title: 'MongoDB with NodeJS'
    },
    {
        url: '/sql.png',
        title: 'SQL Databases with NodeJS'
    },
    {
        url: '/bootstrap.png',
        title: 'BootStrap'
    },
]

export const SlideComponent: React.FC = () => {

    return (
        <>
            <div className='d-flex flex-column align-items-center py-4'>
                <Splide options={{
                    type: 'loop',
                    perPage: 3,
                    perMove: 1,
                    width: 1200,
                    pagination: false,
                    arrows: true,
                    drag: true,
                    breakpoints: {
                        1200: {
                            perPage: 4,
                            width: 300,
                        },
                        600: {
                            perPage: 1,
                            width: 300,
                        },
                        300: {
                            width: 250,
                        }
                    }
                }}>
                    {
                        certificates.map((c: any, index: number) => (
                            <SplideSlide key={index}>
                                <SlideCard
                                    url={c.url}
                                    title={c.title}
                                />
                            </SplideSlide>
                        ))
                    }
                </Splide>
            </div >
        </>
    )
};