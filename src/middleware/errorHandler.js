const notFound = (req, res) => {
	res.status(404).json('endpoint or method not found');
}

export default {
	notFound
}
