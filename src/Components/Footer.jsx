import './Footer.css'

export default function Footer() {
    return (
        <div className='footer'>

            <div className="topRow">
                <div>
                    <h1>Luxury Trip</h1>
                    <p>Choose your favourite destination</p>
                </div>
                <div className='iconCont'>
                    <a href="/">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-square-twitter"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-pinterest"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-square-instagram"></i>
                    </a>
                </div>

            </div>
            <div className="bottomRow">
                <div>
                    <h4>Projects</h4>
                    <a href="/">Changelog</a>
                    <a href="/">status</a>
                    <a href="/">licence</a>
                    <a href="/">All Versions</a>

                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">Github</a>
                    <a href="/">issues</a>
                    <a href="/">project</a>
                    <a href="/">twitter</a>

                </div>
                <div>
                    <h4>Projects</h4>
                    <a href="/">support</a>
                    <a href="/">troubleshooting</a>
                    <a href="/">Contact Us</a>

                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of service</a>
                    <a href="/">privacy policy</a>
                    <a href="/">licence</a>

                </div>
            </div>
        </div>
    )
}
