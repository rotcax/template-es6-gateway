import { GenericController } from '../controllers';

const schemas = [
	{
		path: '/login',
		method: 'post',
		redirect: 'auth/signin',
		controller: GenericController.send
	},
	{
		path: '/logout',
		method: 'post',
		redirect: 'auth/signout',
		controller: GenericController.send
	}
]

export default schemas;
