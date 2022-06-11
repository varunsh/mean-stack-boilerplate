const { Sequelize } = require('sequelize');

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

const sequelize = new Sequelize('sqlze_test', 'varun', 'P@ssword1', {
	host: 'localhost',
	dialect: 'mysql'
});


try {
	(async ()=>{
  		await sequelize.authenticate();
  		console.log('Connection has been established successfully.');
	})()
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export { sequelize, connectionPool};