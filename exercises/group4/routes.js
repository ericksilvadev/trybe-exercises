const express = require('express');

const { createTeam, getTeams } = require('./controllers/teamsController');
const teamValidation = require('./middlewares/validateTeam');

const router = express.Router();

router.post('/teams', teamValidation, createTeam);

router.get('/teams', getTeams);

module.exports = router;