import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import * as reviewActions from '../../store/reviews'
import { getUsers } from "../../store/users";
import './ReviewsComponent.css';

const ReviewsComponent = () => {

    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [reviewBody, setReviewBody] = useState('');
    const [setErrors] = useState([]);
    
    const userId = sessionUser?.id
    const { id } = useParams();
    const rentalId = id;


    const reviews = useSelector((state) => Object.values(state.reviews));
    const users = useSelector((state) => Object.values(state.users));
    const currentReviews = reviews.filter((review) => review.rentalId === Number(id));

    console.log(users)

    useEffect(() => {
        dispatch(reviewActions.getReviews());
        dispatch(getUsers())
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();

        const reviewCreated = dispatch(reviewActions.createReview({
            userId,
            rentalId,
            reviewBody
        }))
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        });
        if (reviewCreated) {
            history.push(`/rentals/${rentalId}`)
        }
    }
    
    return (
        <>
            {sessionUser && 
            <form onSubmit={handleSubmit}>
                <input 
                    className="form-input"
                    value={reviewBody}
                    onChange={e => setReviewBody(e.target.value)}
                    placeholder="Leave a review"
                />
                <button className="form-btn"
                    type="submit"
                >Submit</button>
            </form>}
            <div>
                {currentReviews.map((review) => {
                    const commentUser = users.find((user) => user.id === review.userId)
                    return (
                        <div>
                            <div>
                                <div>{commentUser?.username}</div>
                                <div className="icon">
                                    <img className="icon" src="https://thispersondoesnotexist.com/image" alt="icon"></img>
                                </div>
                            </div>
                            <div>
                                <div>{review?.reviewBody}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
        
    )
}

export default ReviewsComponent;