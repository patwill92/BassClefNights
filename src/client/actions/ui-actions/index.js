import {TOGGLE_NAV, START_COUNTDOWN, SCROLL_POSITION} from "../types";

export const toggleNav = payload => {
    return {
        type: TOGGLE_NAV,
        payload
    }
};

export const scrollPosition = payload => {
    return {
        type: SCROLL_POSITION,
        payload
    }
};

export const startCountDown = payload => {
    if(payload.dispatchData) {
        return {
            type: START_COUNTDOWN,
            payload: payload.dispatchData
        }
    } else {
        return {
            type: START_COUNTDOWN,
            payload
        }
    }
};

