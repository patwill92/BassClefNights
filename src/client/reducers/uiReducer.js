import {TOGGLE_NAV} from "../actions/types"

export default (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_NAV:
            return {...state, nav: action.payload};
        default:
            return state;
    }
}