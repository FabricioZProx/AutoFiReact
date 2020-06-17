import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectPost, setPost} from '../actions/actions'
import Comment from '../components/Comment'

const Post = () => {
    const post = useSelector(state => state.post)
    const user = useSelector(state => state.user);
    const selectedPost = useSelector(state => state.selectedPost);
    const dispatch = useDispatch();

    function getPost() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .catch(err => {
                throw new Error(err)
            })
            .then(json => {
                //Filter post from other users
                dispatch(setPost(json.filter(entry => entry.userId === user)));
            });
    }

    useEffect(getPost, [user]);

    if (post && post.length > 0) {
        return (
            <ul>
                {post.map((entry) => (
                    <React.Fragment>
                        <li key={entry.id} onClick={() => dispatch(selectPost(entry.id))}>
                            <div style={{textAlign: "left"}} key={entry.id + "div"}>
                                <h4 key={entry.id + 'h'}>{entry.title}</h4>
                                <p key={entry.id + 'p'}>{entry.body}</p>
                            </div>
                        </li>
                        {(selectedPost && selectedPost === entry.id) ? <Comment key={entry.id + 'com'}/> : ""}
                        <hr key={entry.id + 'hr'} style={{borderTop: "3px solid #bbb"}}/>
                    </React.Fragment>
                ))}
            </ul>

        )
    } else
        return <div>No post for this user</div>
};


export default Post;