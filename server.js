const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';

const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.use(express.urlencoded({ extended: true }));
    server.use(express.json());

    server.get('/something', (req, res) => {
        res.json('hi')
    })

    server.listen(3030, (err) => {
        if(err) throw err
        console.log('server ready');
    })
}).catch((ex) => {
    console.error(ex.stack);
    process.exit(1)
});