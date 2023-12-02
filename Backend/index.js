const express = require("express");
const app = express();
const mongoose = require('mongoose')


app.use(express.json());

mongoose.connect("mongodb://localhost/testdb")
const db = mongoose.connection

const UserRouter = require('./routes/HandleUsers')
const PoolRouter = require('./routes/HandlePools')
app.use('/pools', PoolRouter)
app.use('/users', UserRouter)

app.listen(3000, () => {
	console.log("Server started on port 3000");
})
