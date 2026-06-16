import './AboutUs.css'


export default function AboutUsData(props) {
    return (

        <div className='AboutContainer'>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    )
}
