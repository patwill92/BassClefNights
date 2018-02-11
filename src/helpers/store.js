import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from '../client/reducers'
import {createEpicMiddleware} from 'redux-observable';
import epics from './epics';

const epicMiddleware = createEpicMiddleware(epics);

export const serverStore = () => createStore(reducers, {ui: {nav: false, modal: false}});

export const clientStore = (initialState) => process.env.NODE_ENV === 'production' ?
    createStore(reducers, initialState, applyMiddleware(thunk)) :
    createStore(reducers, initialState, applyMiddleware(epicMiddleware, logger));
