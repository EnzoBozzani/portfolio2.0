import { Project } from '@/app/projects/page';

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <article className='w-1/3 border rounded bg-dark shadow-lg flex flex-col justify-center items-center gap-7 text-white'>
            <p className='text-2xl font-bold'>{project.title}</p>
            <div className='flex justify-center items-center'>
                {project.techImgsArr.map((tech) => tech)}
            </div>
            <p>
                {project.description}
            </p>
        </article>
    )
}