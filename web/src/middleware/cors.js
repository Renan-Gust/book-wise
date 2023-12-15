// middleware/cors.js

import nextConnect from 'next-connect';

const cors = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Pode ser ajustado para permitir apenas origens específicas
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    next();
    res.status(200).end();
    return;
};

export default nextConnect().use(cors);
