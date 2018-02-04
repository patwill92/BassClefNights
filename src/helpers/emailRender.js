import React from 'react';
import {renderToString} from 'react-dom/server'
import Email from './Email'

export default () => {
    const content = renderToString(<Email/>);
    return `
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="shortcut icon" href="images/logoIcon.ico" type="image/x-icon" />
        <style>
            @media screen and (max-width: 525px) {
                table[class="wrapper"]{
                    width:100% !important;
                }
            }
        </style>
      </head>
      <body style="margin: 0; padding: 0; width: 100%; min-width:100%;">
        ${content}
      </body>
    </html>
  `;
};
