import {TOGGLE_MOBILE_NAV} from "../actions/types"

export default (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_MOBILE_NAV:
            return {...state, mobileNav: action.payload};
        default:
            return state;
    }
}