import {TOGGLE_NAV, START_COUNTDOWN, SCROLL_POSITION, SET_NAV_COLOR, OPEN_MODAL} from "../actions/types"

export default (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_NAV:
            return {...state, nav: action.payload};
        case SET_NAV_COLOR:
            return {...state, navColor: action.payload};
        case SCROLL_POSITION:
            return {...state, scroll: action.payload};
        case OPEN_MODAL:
            return {...state, modal: action.payload};
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