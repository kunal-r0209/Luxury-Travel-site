
import './Hero.css'

const Hero = (props) => {
    return (
        <div className={props.cName} >
            {props.image && <img
                src={props.imageUrl}
                alt="heroImage" />

            }

            {
                props.video &&
                <video style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={require('../Assets/Videos/vid_land_1.mp4')} muted loop autoPlay></video>
            }
            <div className={props.heroText}>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>
                    {props.buttonText}
                </a>
            </div>

        </div>
    )
}

export default Hero