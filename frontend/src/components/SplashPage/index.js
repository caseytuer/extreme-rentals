import { Link, NavLink } from 'react-router-dom';
import logo from '../../assests/logo.png'
import './SplashPage.css';

const message = 'Welcome to extreme rentals, your one stop shop for renting and reviewing the extreme. Click the logo to enter, sign up or log in to post rentals and comments of your own.'

const SplashPage = () => {
    return (
        <>
            <div id="splash-container">
                <NavLink exact to="/home" >
                    <img id="splash-logo" src={logo} alt=""></img>
                </NavLink>
                <div className="splash-message">{message}</div>
            </div>
        </>
    )
}

export default SplashPage;    
// <Link to="home" class="splash">
//     <div className="enter-sign">
//         <Link to="/home">
//             <img src="https://extreme-rentals.s3.us-west-1.amazonaws.com/danger-sign-removebg-preview.png" alt="caution" className="caution-img"></img>
//         </Link>
//     </div>
//     <img src="https://extreme-rentals.s3.us-west-1.amazonaws.com/splash-img.png" alt="splash" id="splash-img"></img>
// </Link>