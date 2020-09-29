import { Router } from 'express';
import schemas from './schema';

const router = Router();

schemas.forEach(({ method, path, controller, redirect }) => {
	router[method](path, (req, res, next) => controller(req, res, next, redirect));
});

export default router;
