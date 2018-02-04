import React, {Fragment} from 'react'

import Row from '../Row'
import Section from '../Section'

const imgStyleMobile = {
    maxWidth: 50,
    height: 'auto'
}

const tdStyle = {
    maxWidth: 50,
    display: 'inline-block',
    fontSize: '30px',
    paddingLeft: '7.5px',
    paddingRight: '7.5px'
}

const tdLogoNameMobile = {
    fontFamily: 'Helvetica',
    fontSize: '15px',
    color: '#e8e8e8',
    fontWeight: 300,
    letterSpacing: '1.0px',
    paddingTop: 10
}

const tdLogoName = {
    fontFamily: 'Helvetica',
    fontSize: '30px',
    color: '#e8e8e8',
    fontWeight: 300,
    letterSpacing: '1.5px'
}

const tableStyle = {
    backgroundImage: 'url("https://bassclefnights.herokuapp.com/images/triangles.png")',
    backgroundColor: 'rgba(22,22,22,0.9)',
    width: '100%',
    textAlign: 'center'
};

const msgStyle = {
    fontFamily: 'Helvetica',
    fontSize: '14px',
    color: '#161616',
    fontWeight: 400,
    letterSpacing: '1.0px',
}


const fbLogo = 'https://cbssacramento.files.wordpress.com/2016/11/facebook-sized.jpg?w=625&h=352&crop=1';

export default props => {
    return (
        <Fragment>
            <div style={{minWidth: '100%', padding: '30px 0 30px 0', ...tableStyle}}>
                <Row>
                    <td width="100%">
                        <Section align={'center'} valign={'middle'}>
                            <td valign="middle" align="center" width="100%">
                                <img src="https://bassclefnights.herokuapp.com/images/logoWhiteFilled.png"
                                     style={imgStyleMobile}/>
                            </td>
                        </Section>
                        <Section align={'center'} valign={'middle'}>
                            <td width="100%" align="center">
                                <div style={tdLogoNameMobile}>BASS CLEF NIGHTS</div>
                            </td>
                        </Section>
                    </td>
                </Row>
                <Row>
                    <td width="100%">
                        <Section align={'center'}>
                            <td width="100%">
                                <a href='https://bassclefnights.herokuapp.com/' style={{...tdStyle}}>
                                    <img src="https://bassclefnights.herokuapp.com/images/fb.png"
                                         style={{width: 30, height: 'auto', margin: 'auto'}}/>
                                </a>
                                <a href='https://bassclefnights.herokuapp.com/' style={{...tdStyle}}>
                                    <img src="https://bassclefnights.herokuapp.com/images/tw.png"
                                         style={{width: 30, height: 'auto', margin: 'auto'}}/>
                                </a>
                                <a href='https://bassclefnights.herokuapp.com/' style={{...tdStyle}}>
                                    <img src="https://bassclefnights.herokuapp.com/images/insta.png"
                                         style={{width: 30, height: 'auto', margin: 'auto'}}/>
                                </a>
                            </td>
                        </Section>
                    </td>
                </Row>
            </div>
            <Row>
                <td width="100%">
                    <Section align={'left'}>
                        <td width="100%">
                            <div style={{padding: '30px 20px 10px 20px', ...msgStyle}}>Dear {props.name},</div>
                        </td>
                    </Section>
                    <Section align={'left'}>
                        <td width="100%">
                            <div style={{...msgStyle, padding: '0 20px 0 20px'}}>
                                Thank you for contacting us, we'll get back to you shortly!
                            </div>
                        </td>
                    </Section>
                    <Section align={'left'}>
                        <td width="100%">
                            <div style={{...msgStyle, padding: '10px 20px 0 20px'}}>
                                <strong>BCN Team</strong>
                            </div>
                        </td>
                    </Section>
                </td>
            </Row>
        </Fragment>
    )
}