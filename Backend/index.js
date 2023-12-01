const mongoose = require('mongoose')
const User = require("./user")

mongoose.connect("mongodb://localhost/testdb")
run()
run()

async function run() {
	const user = await User.create({
		email: "Kyle",
		password: "123password"
	})
	user.email = "kyledaboss@gmail.com";
	await user.save();
	console.log(user);
}

User.find()