const mongoose = require("mongoose");

mongoose
	.connect(
		process.env.mongoDB_URL ||
			"mongodb+srv://Ridhima:cA7yswlx3goDPUeZ@cluster0.r8w0ayi.mongodb.net/?retryWrites=true&w=majority"
	)
	.then(() => console.log(`Connection successfully with MongoDB`))
	.catch((error) => console.log(`connection failed ${error.message}`));

module.exports = mongoose;
