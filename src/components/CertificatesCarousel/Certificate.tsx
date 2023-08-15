export const Certificate = ({ src, display, text } : { src: string, display: string, text: string }) => {
    return (
        <div style={{display: display}}>
            <img src={src} alt="certificate"/>
            <p>{text}</p>
        </div>
    )
}