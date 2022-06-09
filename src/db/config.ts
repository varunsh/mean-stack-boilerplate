import mysql from 'mysql';

const connectionPool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'varun',
	password: 'P@ssword1',
	database: 'test',
	insecureAuth: true
});

connectionPool.on('error', ()=> console.log("Error: MySql error!"));

export = connectionPool;