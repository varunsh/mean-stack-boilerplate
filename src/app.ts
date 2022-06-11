import express from 'express';
import routes from './app.routes';
import path from 'path';


const app = express();

// Middlewares
app.use( express.json());
app.use( express.urlencoded({ extended: true }));
app.use( express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
	res.sendfile('start.html');
});

app.use( routes);

const hostname = '127.0.0.1';
const port = 3000;

app.listen( port, () => {
	console.log(`App started at http://${hostname}:${port}...`);
});