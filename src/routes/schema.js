import { config } from 'dotenv';
import { GenericController } from '../controllers';

config();

const { MICROSERVICE_HOST } = process.env;

const schemas = [
	{
		path: '/test',
		method: 'get',
		controller: GenericController.send,
		redirect: {
			path: `${MICROSERVICE_HOST}/`,
			method: 'GET'
		},
	}
]

export default schemas;
