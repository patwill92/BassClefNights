import {TOGGLE_NAV, START_COUNTDOWN} from "../types";

export const toggleNav = payload => {
    return {
        type: TOGGLE_NAV,
        payload
    }
};

export const startCountDown = payload => {
    return {
        type: START_COUNTDOWN,
        payload
    }
};

