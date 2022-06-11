import express from 'express';
import userRoutes from './routes/users.routes';

let router = express.Router();

router.use('/users', userRoutes);

// this needs to be the last defined rule.
router.use((req, res) => {
	res.status(404).sendfile('./src/public/404.html');
})

export default router;