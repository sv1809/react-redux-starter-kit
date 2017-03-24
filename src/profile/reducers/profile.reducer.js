import * as actionTypes from "../constants/profile.actionTypes";

const initialState = {
    currentUser: {
        name: "Администратор",
        login: "admin",
        email: ""
    }
};

const profile = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_USER:
            return Object.assign({}, state, { currentUser: action.moduleName });
        default:
            return state;
    }
};

export default profile;