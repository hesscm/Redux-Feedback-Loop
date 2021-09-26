const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM feedback ORDER BY flagged, date DESC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

// Setup a POST route to add a feedback entry to the database
router.post('/', (req, res) => {
    const feedback = req.body;
    const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments)
                     VALUES ($1, $2, $3, $4)`;
    // Let sql sanitize your inputs (NO Bobby Drop Tables here!) 
    // the $1, $2, etc get substituted with the values from the array below
    //--(need source for this wonderful comment...guess is Sarah Fuoss)
    pool.query(sqlText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
        .then((result) => {
            console.log(`Added feedback to the database`, feedback);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

module.exports = router;