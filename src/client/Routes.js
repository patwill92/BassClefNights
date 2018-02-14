import React from 'react';
import App from './App'

//pages
import Home from './pages/Home'
import About from './pages/About'
import Lineup from './pages/Lineup'
import Contact from './pages/Contact'
import Tickets from './pages/Tickets'
import Sponsor from './pages/Sponsor'

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
            },
            {
                ...Tickets,
                path: '/tickets'
            },
            {
                ...Sponsor,
                path: '/sponsor'
            }
        ]
    }
];