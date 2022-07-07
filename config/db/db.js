const mongoose = require('mongoose');

const connectDb = async () => {
	try {
		const conn = await mongoose.connect(process.env.DATABASE_URL_LOCAL);
		console.log(`The database is connected on ${conn.connection.host}`);
	} catch (error) {}
};

module.exports = connectDb;
