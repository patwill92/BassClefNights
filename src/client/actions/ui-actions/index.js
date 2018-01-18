import {TOGGLE_MOBILE_NAV} from "../types";

export const toggleMobileNav = payload => {
    return {
        type: TOGGLE_MOBILE_NAV,
        payload
    }
};