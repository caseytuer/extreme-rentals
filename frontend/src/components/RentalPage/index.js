import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import { cancelRental, editRental } from "../../store/rentals";
import { getRentals } from "../../store/rentals";
import { getImages } from "../../store/images";
import './RentalPage.css';

const RentalPage = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    
    
    const sessionUser = useSelector((state) => state.session.user);
    const images = useSelector((state) => Object.values(state.images));
    const currentRental = useSelector(state => state.rentals[id])
    const currentImages = images.filter(image => image.rentalId === Number(id));

    const accessUser = currentRental?.userId === sessionUser?.id;
    

    useEffect(() => {
        dispatch(getRentals());
        dispatch(getImages());
    }, [dispatch])
    
    
    const removeBtnHandler = (e) => {
        e.preventDefault();
        const removed = dispatch(cancelRental(Number(currentRental?.id)));
        if (removed) {
            history.push('/');
        }
    };

    const bookBtnHandler = (e) => {
        e.preventDefault();
    }

    const editBtnHandler = (e) => {
        history.push(`/rentals/${currentRental?.id}/edit`);
        
    }
    


    return (
        <div>
            <div className="rental-img-container">
                <img className="rental-img-main" alt="rental" src={currentImages[0]?.url}></img>
                <div className="rental-img-main">
                    <img className="rental-img-sub" src={currentImages[1]?.url} alt=""></img>
                    <img className="rental-img-sub" src={currentImages[2]?.url} alt=""></img>
                    <img className="rental-img-sub" src={currentImages[3]?.url} alt=""></img>
                    <img className="rental-img-sub" src={currentImages[4]?.url} alt=""></img>
                </div>
            </div>    
            <div className="rental-info-container">
                <div className="title-and-description">
                    <div className="rental-title">{currentRental?.name}</div>
                    <div className="description">{currentRental?.description}</div>
                </div>
                <div className="price-and-rating">
                    <div>{`$${currentRental?.price} per day`}</div>
                    <div>{'⭐️⭐️⭐️⭐️⭐️ Excellent'}</div>
                    <div>{'Start Date → End Date'}</div>
                    {accessUser? <button name="remove-btn" type="button" onClick={removeBtnHandler}>Remove Rental</button> :
                    <button name="book-btn"type="submit">Book</button>}
                    {accessUser && <button name="edit-btn" type="submit" onClick={editBtnHandler}>Edit Rental</button>}
                </div>
            </div>
        </div>
    )
}

export default RentalPage;