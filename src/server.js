import express from 'express'
import {matchRoutes} from 'react-router-config'
import bodyParser from 'body-parser'
import compression from 'compression'

import routes from './client/Routes'
import renderer from './helpers/renderer';
import {serverStore as createServerStore} from './helpers/store'

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createServerStore();
    const promises = matchRoutes(routes, req.url).map(({route}) => {
        return route.loadData ? route.loadData() : null
    }).filter(promise => promise);

    Promise.all(promises).then((promise) => {
        if(promise[0]) {
            promise.forEach(({data, func}) => {
                req.dispatchData = data;
                store.dispatch(func(req))
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
