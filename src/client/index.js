import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {renderRoutes} from 'react-router-config'
import {ThemeProvider} from 'react-jss'

import {clientStore as createClientStore} from '../helpers/store'
import routes from './routes'
import theme from '../styles/theme'

const store = createClientStore(window.INITIAL_STATE);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                {renderRoutes(routes)}
            </ThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
