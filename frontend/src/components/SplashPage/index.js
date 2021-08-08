import { Link, NavLink } from 'react-router-dom';
import './SplashPage.css';

const SplashPage = () => {
    return (
        <>
            <div id="splash-container">
                <NavLink exact to="/home" >
                    <img id="splash-logo" src="https://i.ibb.co/DQ5q7yH/logo.png" alt=""></img>
                </NavLink>
            <div className="welcome-text"></div>
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