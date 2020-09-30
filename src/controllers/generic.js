import { fetchService } from '../utils';

const response = (result) => ({ result });

const send = async (req, res, next, { path, method }) => {
	try {
		const fetch = await fetchService(path, method, req.body);
		return res.json(fetch);

	} catch(error) {
		const { statusCode, result } = error;
		if(statusCode) return res.status(statusCode).send(response(result));

		next(error);
	}
}

export default {
	send
}
