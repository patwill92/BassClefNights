import React from 'react';
import App from './App'

//pages
import Home from './pages/Home'
import About from './pages/About'
import Lineup from './pages/Lineup'
import Contact from './pages/Contact'

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
            },
            {
                ...Contact,
                path: '/contact'
            }
        ]
    }
];