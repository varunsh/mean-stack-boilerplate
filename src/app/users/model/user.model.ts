import { sequelize } from '../../../db/config'
import { Sequelize, DataTypes, Model } from 'sequelize';

export class User extends Model {}

User.init({
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true
	},
	firstName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	lastName: {
		type: DataTypes.STRING,
		allowNull: false
	}
},{
	sequelize,
	modelName: 'User',
	tableName: 'Users',
	timestamps: true
});

(async ()=>{
	await User.sync({ alter: true });
})();
console.log('User table created');