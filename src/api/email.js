import express from 'express'
import sendGrid from '@sendgrid/mail'
import client from '@sendgrid/client'

import keys from '../config/keys'
import emailRender from '../helpers/emailRender'

const router = express.Router();
sendGrid.setApiKey(keys.SENDGRID_API);
client.setApiKey(keys.SENDGRID_API);

const inquiryType = (inquiry) => {
    switch(inquiry) {
        case 1: return 'Become a founder';
        case 2: return 'Become a Sponsor';
        case 3: return 'Ticket Information';
        default: return 'General Question';
    }
};


router.post('/send', async (req, res) => {
    let category = Number(req.body.inquiry);
    let inquiry = inquiryType(category);
    const content = await emailRender(req.body.name, inquiry);
    const email = {
        from: 'Bass Clef Nights <patrick.rw92@gmail.com>',
        to: `${req.body.name} <${req.body.email}>`,
        replyTo: `${req.body.name} <${req.body.email}>`,
        subject: inquiry,
        text: req.body.message,
        html: content
    };
    const message = {
        from: `${req.body.name} <patrick.rw92@gmail.com>`,
        to: `Bass Clef Nights <patrick.rw92@gmail.com>`,
        subject: inquiry,
        text: req.body.message
    };
    const contact = {
        body: [
            {
                "email": req.body.email,
                "first_name": req.body.name,
                "last_name": "",
                category
            }
        ],
        method: 'POST',
        url: '/v3/contactdb/recipients'
    };
    let emails = [email, message];
    try {
        if (!req.body.email)
            error();
        await client.request(contact);
        await sendGrid.send(emails);
        res.send({done: 'YES', message: `Thanks ${req.body.name}, your message has been received!`})

    } catch (e) {
        console.log(e);
        res.send({error: `Sorry ${req.body.name}, there was a problem! Please try again`})
    }
});

export default router;