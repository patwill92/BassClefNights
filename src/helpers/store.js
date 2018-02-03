import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from '../client/reducers'

export const serverStore = () => createStore(reducers, {ui: {nav: false, scroll: 0, modal: false}});

export const clientStore = (initialState) => process.env.NODE_ENV === 'production' ?
    createStore(reducers, initialState, applyMiddleware(thunk)) :
    createStore(reducers, initialState, applyMiddleware(thunk, logger));
