import {CHANGE_USER, GET_COMMENT, GET_POST, POST_COMMENT, SELECT_POST} from "../constants/action-types"

/* THIS WILL REQUIRE THUNK
export function getPosts() {
    return function (dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {dispatch({ type: GET_POST, payload: json})});
    };
}

export function getComments(postId) {
    return function (dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {dispatch({ type: GET_COMMENT, payload: json})});
    }
}*/

export function changeUser(userId) {
    //Could data fetch for post here with a thunk, won't for simplicity
    //Add validation of userId > 0, or similar
    return {type: CHANGE_USER, payload: userId};
}

export function setPost(payload) {
    return {type: GET_POST, payload};
}

export function setComment(payload) {
    return {type: GET_COMMENT, payload};
}

export function selectPost(payload) {
    return {type: SELECT_POST, payload}
}

export function postComment(payload) {
    return {type: POST_COMMENT, payload};
}