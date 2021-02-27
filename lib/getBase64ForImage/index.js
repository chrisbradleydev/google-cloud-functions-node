const fetch = require('node-fetch');

exports.getBase64ForImage = async (req, res) => {
    const image = await fetch(req.query.url || '');
    const contentType = image.headers.get('content-type');
    const buffer = await image.buffer();
    res.send(`data:${contentType};base64,${buffer.toString('base64')}`);
};
