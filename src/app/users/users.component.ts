import connectionPool from '../../db/config';
import { Request, Response} from 'express';

const getUsers = async (req: Request, res: Response) => {
	connectionPool.query( 'SELECT * FROM USERS', ( error, results, fields) => {
		if( error) return res.send( "Error occured while accessing data." + error.code);
		res.send({data: results});
	});
}

const getUser = (req: Request, res: Response) => {
	connectionPool.query( 'SELECT * FROM USERS WHERE ID=' + req.params.id, ( error, results, fields) => {
		if( error) throw error;
		res.send({data: results});
	});
}

export default { getUsers, getUser}