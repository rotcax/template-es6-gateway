import { config } from 'dotenv';
import { GenericController } from '../controllers';

config();

const { AUTH_HOST, FORMS_HOST } = process.env;

const schemas = [
	{
		path: '/login',
		method: 'post',
		controller: GenericController.send,
		redirect: {
			path: `${AUTH_HOST}/signin`,
			method: 'post'
		},
	},
	{
		path: '/logout',
		method: 'post',
		controller: GenericController.send,
		redirect: {
			path: `${AUTH_HOST}/signout`,
			method: 'post'
		},
	}
]

export default schemas;
