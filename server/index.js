import express from 'express';
const app = express();

app.get('/', (req, res) => {
	res.send('yo');
});

const server = app.listen(3000, () => {
	const {address, port} = server.address();
	console.log('Example app listening at http://%s:%s', address, port);
});