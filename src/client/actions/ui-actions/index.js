import {TOGGLE_NAV, START_COUNTDOWN, SCROLL_POSITION, SET_NAV_COLOR, OPEN_MODAL} from "../types";

export const toggleNav = payload => {
    return {
        type: TOGGLE_NAV,
        payload
    }
};

export const openModal = payload => {
    return {
        type: OPEN_MODAL,
        payload
    }
};

export const setNavColor = payload => {
    if (payload.dispatchData) {
        return {
            type: SET_NAV_COLOR,
            payload: payload.dispatchData
        }
    } else {
        return {
            type: SET_NAV_COLOR,
            payload
        }
    }
};

export const scrollPosition = payload => {
    return {
        type: SCROLL_POSITION,
        payload
    }
};

export const startCountDown = payload => {
    if (payload.dispatchData) {
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

