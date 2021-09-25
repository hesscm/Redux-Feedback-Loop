const express = require('express');
const app = express();
//BODYPARSER IS DEPRECATED
// const bodyParser = require('body-parser');
const feedbackRouter = require('./routes/feedback.router')
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/feedback', feedbackRouter); //set up feedback router


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});