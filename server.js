if (process.env.NODE_ENV !== 'production') { 
require('dotenv').config() }
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const itemsRouter = require("./routes/items-router");

const app = express();

app.use(cors());

app.use(express.json());

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use(helmet());

app.use('/', itemsRouter);

app.listen(process.env.PORT || 3000);

app.use((req, res, next) => {
	next(createError(404));
});

app.use(function(err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	res.status(err.status || 500);
	next(err);
});

module.exports = app
