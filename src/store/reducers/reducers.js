import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    userName: "Ali",
    email: ""

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SIGNUP:
            return ({
                ...state,
                userName: action.payload.name
            })
        case ActionTypes.SIGIN:
            return ({
                ...state,
                email: action.payload.email
            })

        default:
            return state;
    }

}