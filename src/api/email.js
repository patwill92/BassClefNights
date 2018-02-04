import express from 'express'

import keys from '../config/keys'
import emailRender from '../helpers/emailRender'

const router = express.Router();
const mailgun = require('mailgun-js')({apiKey: keys.MAILGUN_API, domain: keys.MAILGUN_DOMAIN});

router.post('/send', async (req, res) => {
    const content = await emailRender(req.body.name);
    const data = {
        from: 'Bass Clef Nights <postmaster@sandbox57c75b6a3be347ba819e0e7dc91545fd.mailgun.org>',
        to: req.body.email,
        subject: req.body.inquiry,
        text: req.body.message,
        html: content
    };
    try {
        await mailgun.messages().send(data);
        res.send({done: 'YES', message: `Thanks ${req.body.name}, your message has been received!`})
    } catch(e) {
        console.log(e);
        res.send({error: `Sorry ${req.body.name}, there was a problem! Please try again`})
    }
});

export default router;