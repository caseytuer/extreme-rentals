import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createComment, deleteComment, getAllComments, updateComment } from '../../store/comments';


const ShowComments = ({ comments, recipeId }) => {
    const dispatch = useDispatch();

    const userId = useSelector(state => state.session.user?.id);

    const [comment, setComment] = useState('');
    const [editComment, setEditComment] = useState(comment)
    const [errors, setErrors] = useState([]);
    const [editShow, setEditShow] = useState(false)

    useEffect(() => {
        dispatch(getAllComments())
    }, [dispatch]);

    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch(deleteComment(id));
    };

    const handleEdit = (e, comment) => {
        e.preventDefault();
        const editableComment = document.getElementById(`comment-${comment.id}`)
        editableComment.hidden = true;
        const editCommentBox = document.getElementById(`edit-comment-${comment.id}`)
        editCommentBox.hidden = false;
    }

    const handleSubmit = (e, comment) => {
        e.preventDefault();

        console.log(comment)

        const payload = {
            comment: comment,
            user_id: userId,
            recipe_id: recipeId
        };

        dispatch(createComment(payload));
    }

    const handleSubmitEdit = (e, comment) => {
        e.preventDefault();

        const payload = {
            id: comment.id,
            comment: comment,
            user_id: userId,
            recipe_id: recipeId
        };

        dispatch(updateComment(payload));
    }

    return (
        <div >
            <form
                onSubmit={(e) => handleSubmit(e)}>
                <input
                    placeholder="Add Comment"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                ></input>
                <button
                    type="submit"
                >Submit</button>
            </form>
            {comments &&
                comments.map((comment) => (
                    <div
                        key={comment.id}

                    >
                        <form id={`edit-comment-${comment.id}`}
                            hidden={true}
                            onSubmit={(e) => handleSubmitEdit(e, comment)}>
                            <input
                                placeholder={comment.comment}
                                onChange={(e) => setEditComment(e.target.value)}
                            ></input>
                            <button
                                type="submit"
                            >Submit</button>
                        </form>
                        <div id={`comment-${comment.id}`}>
                            {comment.comment}
                            {comment.user_id === userId &&
                                <>
                                    <i
                                        className='fas fa-minus-circle'
                                        onClick={(e) => handleDelete(e, comment.id)}
                                    ></i>
                                    <i
                                        onClick={(e) => handleEdit(e, comment)}
                                        className='fas fa-edit'
                                    >
                                    </i>
                                </>
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export default ShowComments;