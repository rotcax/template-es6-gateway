import express from 'express';
import routes from '../routes';
import { json, urlencoded } from 'body-parser';
import { errorHandler } from '../middleware';

const startServer = () => {
	const { notFound } = errorHandler;
	const app = express();

	app.use(urlencoded({ extended: false }));
	app.use(json());

	app.use('/api', routes);

	app.use(notFound);

	const port = process.env.PORT || 3000;
	app.listen(port, () => console.log(`Express server listening on port ${port}`));
}

export default startServer;
