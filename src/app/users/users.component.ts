import connection from '../../db/config';
import { Request, Response} from 'express';

const getUsers = (req: Request, res: Response) => {
	connection.query( 'SELECT * FROM USERS', ( error, results, fields) => {
		if( error) throw error;
		res.send({data: results});
	});
}

const getUser = (req: Request, res: Response) => {
	connection.query( 'SELECT * FROM USERS WHERE ID=' + req.params.id, ( error, results, fields) => {
		if( error) throw error;
		res.send({data: results});
	});
}

export default { getUsers, getUser}