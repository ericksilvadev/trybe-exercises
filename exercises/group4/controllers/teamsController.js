const teams = [];

const createTeam = async (req, res) => {
  const { name, initials, country, league } = req.body;

  teams.push({ name, initials, country, league });

  return res.status(200).json({ name, initials, country, league })
}

const getTeams = async (_req, res) => {
  return res.status(200).json({ teams });
}

module.exports = { createTeam, getTeams };
