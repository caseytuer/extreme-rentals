import { Link } from 'react-router-dom';
import './SplashPage.css';

const SplashPage = () => {
    return (
        <Link to="home" class="splash">
            <div className="enter-sign">
                <Link to="/home">
                    <img src="https://extreme-rentals.s3.us-west-1.amazonaws.com/danger-sign-removebg-preview.png" alt="caution" className="caution-img"></img>
                </Link>
            </div>
            <img src="https://extreme-rentals.s3.us-west-1.amazonaws.com/splash-img.png" alt="splash" id="splash-img"></img>
        </Link>
    )
}

export default SplashPage;    