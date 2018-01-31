import {TOGGLE_NAV, START_COUNTDOWN, SCROLL_POSITION} from "../actions/types"

export default (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_NAV:
            return {...state, nav: action.payload};
        case SCROLL_POSITION:
            return {...state, scroll: action.payload};
        case START_COUNTDOWN:
            return {
                ...state,
                countdown: {
                    ...state.countdown,
                    ...action.payload
                }
            };
        default:
            return state;
    }
}