const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

var MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost/fitness';
mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
});

app.use(require('./routes/index'));
app.use(require('./routes/api/apiRoutes'));

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});