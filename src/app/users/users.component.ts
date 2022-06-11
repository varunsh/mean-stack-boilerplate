import { connectionPool, sequelize } from '../../db/config';
import { Request, Response} from 'express';
import { User } from './model/user.model';

const getUsers = async (req: Request, res: Response) => {
	try{
		const users = await User.findAll();
		res.send(users);
	}
	catch (e) {
		console.log(e);
	}

}

const getUser = async (req: Request, res: Response) => {
	try {
		const user = await User.findAll({
			where: {
				id: req.params.id
			}
		});
		res.send( user);
	}
	catch(e) {
		console.log(e);
	}
}

const addNewUser = async (req: Request, res: Response) => {
	const {first_name, last_name} = req.body;
	const user = await User.create({
		firstName: first_name,
		lastName: last_name
	});
	res.send(user.toJSON());
}

const updateUser = async (req: Request, res: Response) => {
	const userId = req.body.id;
	const {first_name, last_name} = req.body;
	const user = await User.findByPk(userId);
	console.log('\n\n\n\nUSER...', JSON.stringify(user));
	if(!user) {
		res.status(404).send(`User with id ${userId} NOT FOUND`);
	}
	let newValues = {};
	if (first_name){
		newValues['firstName'] = first_name;
	}
	if( last_name) {
		newValues['lastName'] = last_name;
	}
	user?.update(newValues);
	res.send(user?.toJSON());
}


const deleteUser = async (req: Request, res: Response) => {
	const userId = req.params.id;
	const user = await User.findByPk(userId);
	if(!user) {
		res.status(404).send(`User with id ${userId} NOT FOUND`);
	}
	console.log('\n\n\n\nUSER...', JSON.stringify(user));
	await user?.destroy();
	res.send(user?.toJSON);
}

export default { getUsers, getUser, addNewUser, updateUser, deleteUser}