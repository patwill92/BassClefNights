import {TOGGLE_NAV} from "../types";

export const toggleNav = payload => {
    return {
        type: TOGGLE_NAV,
        payload
    }
};