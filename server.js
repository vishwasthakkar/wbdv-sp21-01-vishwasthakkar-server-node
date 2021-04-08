const express = require('express');
const app = express();

require('./controllers/quizzes-controller')(app);

app.listen(4000);