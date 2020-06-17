import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeUser} from '../actions/actions'

const UserSelect = () => {
    /*const [userId, setUserId] = useState(1);*/
    //Assuming default user, can be changed

    const userId = useSelector(state => state.user)
    const dispatch = useDispatch();

    const inputRef = useRef(userId);

    //Adding validation for User Id is recommended
    return (
        <React.Fragment>
            <div style={{display: "flex"}}>
                <div style={{flex: "50%"}}>
                    <p>Current user: </p>
                    <p>{userId}</p>
                </div>
                <div style={{flex: "50%"}}>
                    <p>Change user:</p>
                    <input type="number" ref={inputRef}
                        /*onChange={event => {console.log(event.target.value);userId = event.target.value}}*//>
                    <button onClick={() => dispatch(changeUser(parseInt(inputRef.current.value)))}>Change User</button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default UserSelect;