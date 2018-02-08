import React from 'react';
import App from './App'

//pages
import Home from './pages/Home'
import About from './pages/About'
import Lineup from './pages/Lineup'

export default [
    {
        ...App,
        routes: [
            {
                ...Home,
                path: '/',
                exact: true
            },
            {
                ...About,
                path: '/about'
            },
            {
                ...Lineup,
                path: '/lineup'
            }
        ]
    }
];