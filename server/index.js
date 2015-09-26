import express from 'express';

const app = express();

const port = 3000;

app.use('/static', express.static(process.cwd() + '/dist/'));

app.get('/', require('./renderer/render'));

const server = app.listen(3000, () => {
	const {address, port} = server.address();
	console.log('App Started at http://%s:%s', address, port);
});