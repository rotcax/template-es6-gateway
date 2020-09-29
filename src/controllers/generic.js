
const send = (req, res, next, redirect) => {
	try {

		return res.json(redirect);

	} catch(error) {
		next(error);
	}
}

export default {
	send
}
