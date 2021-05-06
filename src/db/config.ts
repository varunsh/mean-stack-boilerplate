import mysql from 'mysql';

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'varun',
	password: 'password',
	database: 'test',
	insecureAuth: true
});

connection.connect();

export = connection;