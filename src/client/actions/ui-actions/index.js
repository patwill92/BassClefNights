import {TOGGLE_NAV, START_COUNTDOWN, SCROLL_POSITION, SET_NAV_COLOR, OPEN_MODAL, BEGIN_ANIMATION} from "../types";
import moment from "moment/moment";

export const toggleNav = payload => {
    return {
        type: TOGGLE_NAV,
        payload
    }
};

export const beginAnimation = payload => {
    return {
        type: BEGIN_ANIMATION,
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

export const startCountDown = () => {
    let eventDate = new Date(Date.UTC(2018, 10, 15));
    let currentTime = Date.now();
    let duration = moment.duration((eventDate - currentTime));
    let payload = {
        days: Math.floor(duration.asDays()),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds()
    };
    return {
        type: START_COUNTDOWN,
        payload
    }
};

