export const SocialMediaSection: React.FC = () => {
    return (
        <section className='w-1/2 flex md:flex-col justify-center items-center me-3 lg:me-0'>
            <object data="/EnzoBozzani.pdf" type="application/pdf" className='w-10/12 h-[48rem]'>
                <embed src="/EnzoBozzani.pdf" type="application/pdf">
                </embed>
            </object>
        </section>
    )
}