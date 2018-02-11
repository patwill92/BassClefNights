import express from 'express'
import {matchRoutes} from 'react-router-config'
import bodyParser from 'body-parser'
import compression from 'compression'

import routes from './client/Routes'
import renderer from './helpers/renderer';
import {serverStore as createServerStore} from './helpers/store'
import httpsRedirect from './middleware/secure'
import emailRoutes from './api/email'
import {scrollPosition} from "./client/actions";

const app = express();

app.use('/', httpsRedirect());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use('/email', emailRoutes);
const store = createServerStore();

app.post('/test', (req, res) => {
    store.dispatch(scrollPosition(req.body));
});

app.get('*', (req, res) => {
    const promises = matchRoutes(routes, req.url).map(({route}) => {
        return route.loadData ? route.loadData() : null
    }).filter(promise => promise);
    console.log(promises);
    Promise.all(promises).then((promise) => {
        if(promise[0]) {
            promise.forEach((promise) => {
                promise.forEach(({data, func}) => {
                    req.dispatchData = data;
                    store.dispatch(func(req))
                })
            })
        }
        const content = renderer(req, store, {}, routes);
        res.send(content);
    })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
