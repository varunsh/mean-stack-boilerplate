import express from 'express';
import controller from '../app/users/users.component';

const userRoutes = express.Router();
userRoutes.get('/', controller.getUsers);
userRoutes.get('/:id', controller.getUser);
userRoutes.post('/', controller.addNewUser);
userRoutes.put('/', controller.updateUser);
userRoutes.delete('/:id', controller.deleteUser);

export default userRoutes;