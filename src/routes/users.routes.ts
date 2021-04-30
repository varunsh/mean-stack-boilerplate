import express from 'express';

const userRoutes = express.Router();

userRoutes.get('/', (req, res) => {
	res.send( "Hello Users.");
});

export = userRoutes;