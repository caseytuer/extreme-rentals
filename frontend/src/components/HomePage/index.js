import './HomePage.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRentals } from '../../store/rentals';
import { getImages } from '../../store/images';




const HomePage = () => {

    const dispatch = useDispatch();
    // const users = useSelector((state) => Object.values(state.users));
    const rentals = useSelector((state) => Object.values(state.rentals));
    const images = useSelector((state) => Object.values(state.images));

    useEffect(() => {
        // dispatch(getUsers());
        dispatch(getRentals());
        dispatch(getImages());
    }, [dispatch])

    // console.log(rentals)
    return (

    
        <div id="browse-img-container">
            {rentals.map((rental) => 
                <div className="browse-img">
                    <div key={rental.id}>{rental.name}</div>
            </div>)}
            {images.map((image) => 
                <a key={image.id} href={image.url} alt="/#">test</a>
            )}

            {/* {users.map((user) => <li key={user.id}>{user.username}</li>)} */}
            
            {/* <div className="browse-img">
                <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
            </div>
            <div className="browse-img">
                <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
            </div>
            <div className="browse-img">
                <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
            </div>
            <div className="browse-img">
                <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
            </div>
            <div className="browse-img">
                <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
            </div>
            <div className="browse-img">
                <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
            </div>
            <div className="browse-img">
                <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
            </div>
            <div className="browse-img">
                <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
            </div>
            <div className="browse-img">
                <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
            </div>
            <div className="browse-img">
                <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
            </div>
            <div className="browse-img">
                <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
            </div>
            <div className="browse-img">
                <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
            </div>
            <div className="browse-img">
                <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
            </div>
            <div className="browse-img">
                <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
            </div>
            <div className="browse-img">
                <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
            </div>
            <div className="browse-img">
                <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
            </div> */}
        </div>
    )
}

export default HomePage;