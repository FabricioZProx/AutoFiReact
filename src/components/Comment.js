import {useDispatch, useSelector} from "react-redux";
import {setComment} from "../actions/actions";
import React, {useEffect} from "react";
import InputComment from "./InputComment";

const Comment = () => {
    const selectedPost = useSelector(state => state.selectedPost);
    const comment = useSelector(state => state.comment);
    const dispatch = useDispatch();

    function getComment() {
        fetch("https://jsonplaceholder.typicode.com/comments", {mode: 'cors'})
            .then(response => response.json())
            .catch(err => {
                throw new Error(err)
            })
            .then(json => {
                //Filter post for post
                dispatch(setComment(json.filter(entry => entry.postId === selectedPost)));
            });
    }

    useEffect(getComment, [selectedPost]);

    if (comment === null)
        return "Loading...";
    else if (comment.length === 0)
        return (<div><p>This post has no comments</p></div>);
    else
        return (
            <React.Fragment>
                <ul>
                    {comment.map(entry => (
                        <React.Fragment>
                            <li key={entry.id} style={{textAlign: 'justify'}}>
                                <h5 key={entry.id + 'h'} style={{marginBlockEnd: 'unset'}}>{entry.name}</h5>
                                <p key={entry.id + 'p1'} style={{fontSize: "10px"}}>By: {entry.email}</p>
                                <p key={entry.id + 'p2'}>{entry.body}</p>
                            </li>
                            <hr key={entry.id + 'hr'} style={{borderTop: "1px dashed #aaa"}}/>
                        </React.Fragment>
                    ))}
                </ul>
                <InputComment/>
            </React.Fragment>
        )
}

export default Comment;