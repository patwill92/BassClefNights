import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from '../client/reducers'
import moment from "moment-timezone";

const getDate = () => {
    let eventDate = moment("2018-11-15").tz("America/New_York");
    let currentTime = moment.tz("America/New_York");
    let duration = moment.duration((eventDate - currentTime));
    return {
        totalDays: Math.floor(duration.asDays()) * 24 * 60 * 60,
        totalHours: duration.hours() * 60 * 60,
        totalMinutes: duration.minutes() * 60,
        totalSeconds: duration.seconds(),
        days: Math.floor(duration.asDays()),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds()
    };
}

console.log(getDate());

export const serverStore = () => createStore(reducers, {ui: {nav: false, countdown: {...getDate()}}});

export const clientStore = (initialState) => process.env.NODE_ENV === 'production' ?
    createStore(reducers, initialState, applyMiddleware(thunk)) :
    createStore(reducers, initialState, applyMiddleware(thunk));
