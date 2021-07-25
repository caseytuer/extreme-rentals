import './HomePage.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRentals } from '../../store/rentals';
import { getImages } from '../../store/images';
import { Link } from 'react-router-dom';




const HomePage = () => {

    const dispatch = useDispatch();
    const rentals = useSelector((state) => Object.values(state.rentals));
    const images = useSelector((state) => Object.values(state.images));


    useEffect(() => {
        dispatch(getRentals());
        dispatch(getImages());
    }, [dispatch])

    return (

    
        <div id="browse-card-container">
                {rentals?.map((rental) => {
                    const rentalImages = images.find(image => image.rentalId === rental.id);
                    return (
                        <Link to={`/rentals/${rental.id}`} className="browse-card" key={rental.id}>
                            <div >
                                <div>
                                    <img className="browse-card-img" src={rentalImages?.url} alt=""/>
                                </div>
                                <div className="title-and-price">
                                    <div>
                                        <p className="card-title">{rental?.name.length < 12? rental?.name : rental?.name.slice(0,20) + '...'}</p>
                                    </div>
                                    <div className="card-price">{`$${rental?.price}/day`}</div>
                                </div>
                                <div className="city-and-state">{`${rental?.city}, ${rental?.state}`}
                                </div>
                            </div>
                        </Link> 
                    )
                }
                )}
        </div>
    )
}

export default HomePage;