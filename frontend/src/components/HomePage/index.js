import './HomePage.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRentals } from '../../store/rentals';


const HomePage = () => {

    const dispatch = useDispatch();
    const rentals = useSelector((state) => Object.values(state.rentals));

    useEffect(() => {
        dispatch(getRentals());
    }, [dispatch])

    return (

        <tbody>{rentals.map((rentsl) => <div key={rentals.id}/>)}</tbody>
        // <div id="browse-img-container">
        //     <div className="browse-img">
        //         <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
        //     </div>
        //     <div className="browse-img">
        //         <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
        //     </div>
        //     <div className="browse-img">
        //         <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
        //     </div>
        //     <div className="browse-img">
        //         <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
        //     </div>
        //     <div className="browse-img">
        //         <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
        //     </div>
        //     <div className="browse-img">
        //         <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
        //     </div>
        //     <div className="browse-img">
        //         <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
        //     </div>
        //     <div className="browse-img">
        //         <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
        //     </div>
        //     <div className="browse-img">
        //         <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
        //     </div>
        //     <div className="browse-img">
        //         <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
        //     </div>
        //     <div className="browse-img">
        //         <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
        //     </div>
        //     <div className="browse-img">
        //         <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
        //     </div>
        //     <div className="browse-img">
        //         <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
        //     </div>
        //     <div className="browse-img">
        //         <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
        //     </div>
        //     <div className="browse-img">
        //         <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
        //     </div>
        //     <div className="browse-img">
        //         <img src="https://www.watersportspc.com/images/Photo-Sep-20-10-17-28-AM.jpg" alt="/#"></img>
        //     </div>
        // </div>
    )
}

export default HomePage;