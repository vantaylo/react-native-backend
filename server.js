if (process.env.NODE_ENV !== 'production') { 
require('dotenv').config() }
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const itemsRouter = require("./routes/items-router");

app.use(express.json());

app.use(cors());

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use('/', itemsRouter);

app.listen(process.env.PORT || 3000);

app.use((err, req, res, next) => {
	res.status(500).json({
		message: "Something went wrong",
	});
});

module.exports = app