import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postComment} from "../actions/actions";

const InputComment = () => {

    const selectPost = useSelector(state => state.selectedPost);

    const emailRef = useRef();
    const titleRef = useRef();
    const commRef = useRef();

    const dispatch = useDispatch();

    /*function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }*/

    const handleSubmit = (e) => {
        e.preventDefault();
        //Here some kind of user validation should be in place (i.e: check if email is an user value in DB)
        //validateEmail(emailRef.current.value);   //Handle accordingly

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        }

        //Id should be assigned from DB
        const id = getRandomInt(501, 1001);

        const payload = {
            id: id,
            postId: selectPost,
            name: titleRef.current.value,
            email: emailRef.current.value,
            body: commRef.current.value
        };

        titleRef.current.value = "";
        emailRef.current.value = "";
        commRef.current.value = "";

        dispatch(postComment(payload));

    };
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <div style={{textAlign: 'left', paddingLeft: '50px'}}>
                    <h4 style={{marginBlockEnd: 'auto'}}>Add comment:</h4>
                    <div style={{padding: '10px'}}>
                        <label>
                            E-mail:
                            <input type="text" ref={emailRef}/>
                        </label>
                        <label>
                            Title:
                            <input type="text" ref={titleRef}/>
                        </label>
                    </div>
                    <div style={{columnCount: '2'}}>
                        <label>
                            Comment:
                            <textarea ref={commRef} style={{margin: '10px', width: '500px', height: '100px'}}/>
                        </label>
                        <input type="submit" value="Post comment" style={{marginTop: '60px'}}/>
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
};

export default InputComment;