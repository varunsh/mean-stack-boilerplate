import express from 'express';
import routes from './app.routes';


const app = express();

app.use( express.json());

app.get('/', (req, res) => {
	res.sendfile('start.html');
});

app.use( routes);

const hostname = '127.0.0.1';
const port = 3000;

app.listen( port, () => {
	console.log(`App started at http://${hostname}:${port}...`);
});