const middleware = redirectLocalhost => {
    return (req, res, next) => {
        if (req.hostname === 'localhost' && !redirectLocalhost) {
            return next();
        }
        if (isSecure(req)) {
            return next();
        }
        res.redirect('https://' + req.hostname + req.originalUrl);
    };
};

const isSecure = (req) => {
    if (req.secure) {
        return true;
    }
    if (req.headers['x-arr-log-id']) {
        return typeof req.headers['x-arr-ssl'] === 'string';
    }
    return req.headers['x-forwarded-proto'] === 'https';
};

export default middleware;