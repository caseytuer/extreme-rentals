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
    const [editCommentBox, setEditCommentBox] = useState('');
    
    const userId = sessionUser?.id
    const { id } = useParams();
    const rentalId = id;


    const reviews = useSelector((state) => Object.values(state.reviews));
    const users = useSelector((state) => Object.values(state.users));
    const currentReviews = reviews.filter((review) => review.rentalId === Number(id));

    console.log(users)

    useEffect(() => {
        dispatch(reviewActions.getReviews());
        dispatch(getUsers());
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
    
    // const handleEdit = (e) => {
    //     e.preventDefault();
    //     return (
    //         <form onSubmit={handleSubmit}>
    //             <input
    //                 className="form-input"
    //                 value={reviewBody}
    //                 onChange={e => setReviewBody(e.target.value)}
    //                 placeholder={reviewBody}
    //             />
    //             <button className="form-btn"
    //                 type="submit"
    //             >Submit</button>
    //         </form>
    //     )
    // }

    const editComment = (e) => {
        e.preventDefault();
        console.log(e.target)
        // setEditCommentBox()
        const thisReviewId = e.target.id.split('-')[3];

        const reviewEdited = dispatch(reviewActions.editReview({
            id: thisReviewId,
            userId: userId,
            rentalId: rentalId,
            reviewBody: editCommentBox
        }))

        if (reviewEdited) {

            const targetNum = e.target.id.split('-')[3]
            let thisReviewBody = document.getElementById(`review-body-${targetNum}`)
            thisReviewBody.hidden = false;
            document.getElementById(`edit-review-btn-${targetNum}`).hidden = false;
            document.getElementById(`edit-comment-form-${targetNum}`).hidden = true;

            dispatch(reviewActions.getReviews())
            history.push(`/rentals/${rentalId}`)
        }
    }

    const editingTrue = (e) => {
        const targetNum = e.target.id.split('-')[3]
        let thisReviewBody = document.getElementById(`review-body-${targetNum}`)
        thisReviewBody.hidden = true;
        document.getElementById(`edit-review-btn-${targetNum}`).hidden = true;
        document.getElementById(`edit-comment-form-${targetNum}`).hidden = false;
        setEditCommentBox()
        const thisCommentInput = document.getElementById(`edit-comment-input-${targetNum}`)
        thisCommentInput.placeholder = thisReviewBody.innerText;

        
        // const editSubmitBtn = document.getElementById(`edit-comment-submit-btn-${targetNum}`)
        // editSubmitBtn.onSubmit = editComment();
    }

    
    // console.log(e.target)
    const deleteBtn = (e) => {
        e.preventDefault();
        console.log('deletebtn')
        const thisReviewId = e.target.id.split('-')[3]
        const removed = dispatch(reviewActions.destroyReview(Number(thisReviewId)));
        if (removed) {
            console.log('test')
            history.push(`/rentals/${rentalId}`);
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
                            <div>{commentUser?.username}</div>
                            <img className="icon" src="https://thispersondoesnotexist.com/image" alt="icon"></img>
                            <div id={`review-body-${review.id}`}>{review?.reviewBody}</div>
                            <button 
                                id={`edit-review-btn-${review.id}`}
                                type="button"
                                onClick={editingTrue}
                                >Edit
                            </button>
                            <button
                                id={`delete-review-btn-${review.id}`}
                                type="button"
                                onClick={deleteBtn}
                                >Delete
                            </button>
                            <form 
                                onSubmit={editComment}
                                id={`edit-comment-form-${review.id}`} 
                                hidden="true">
                                <input 
                                id={`edit-comment-input-${review.id}`}
                                type="text"
                                onChange={(e) => setEditCommentBox(e.target.value)}
                                />
                                <button
                                    id={`edit-comment-submit-btn-${review.id}`}
                                    type="submit"
                                >Submit</button>
                            </form>
                        </div>
                    )
                }
            )}
                    
            </div>
        </>
    )
}

export default ReviewsComponent;