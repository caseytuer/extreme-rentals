import './HomePage.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRentals } from '../../store/rentals';




const HomePage = () => {

    const dispatch = useDispatch();
    // const users = useSelector((state) => Object.values(state.users));
    const rentals = useSelector((state) => Object.values(state.rentals))

    useEffect(() => {
        // dispatch(getUsers());
        dispatch(getRentals());
    }, [dispatch])

    // console.log(rentals)
    return (

    
        <div id="browse-img-container">
            {rentals.map((rental) => <div className="browse-img" key={rental.id}>{rental.name}</div>)}

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