import {CHANGE_USER, GET_COMMENT, GET_POST, POST_COMMENT, SELECT_POST} from "../constants/action-types";

const initialState = {
    post: [],
    user: 1,
    selectedPost: null,
    comment: null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POST: {
            return Object.assign({}, state, {
                post: action.payload
            });
        }
        case CHANGE_USER: {
            state.user = action.payload;
            state.selectedPost = null;
            break;
        }
        case GET_COMMENT: {
            return Object.assign({}, state, {
                comment: action.payload
            });
        }
        case SELECT_POST: {
            state.selectedPost = action.payload;
            state.comment = null
            break;
        }
        case POST_COMMENT: {
            return Object.assign({}, state, {
                comment: [...state.comment, action.payload]
            });
        }
        default:
            break;

    }

    return state;
}

export default rootReducer;