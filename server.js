const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
require('dotenv').config({ path: 'variables.env' });
const Recipe = require('./models/Recipe');
const User = require('./models/User');

// Connects to database
mongoose
	.connect(process.env.MONGO_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true
	})
	.then(() => console.log('DB connected'))
	.catch(err => console.error(err));

// Initializes application
const app = express();

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
	console.log(`Server listening on PORT ${PORT}`);
});
