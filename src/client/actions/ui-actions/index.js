import {TOGGLE_NAV, START_COUNTDOWN} from "../types";

export const toggleNav = payload => {
    return {
        type: TOGGLE_NAV,
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

