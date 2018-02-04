import express from 'express'
import {matchRoutes} from 'react-router-config'
import bodyParser from 'body-parser'
import compression from 'compression'
// import {Helmet} from 'react-helmet'

import routes from './client/Routes'
import renderer from './helpers/renderer';
// import emailRender from './helpers/emailRender'
import {serverStore as createServerStore} from './helpers/store'
import httpsRedirect from './middleware/secure'

const app = express();

app.use('/', httpsRedirect());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

// app.get('/email', async (req, res) => {
//     const content = await emailRender();
//     console.log(content);
//     res.send(content);
// });

app.get('*', (req, res) => {
    const store = createServerStore();
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
