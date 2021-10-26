const express = require('express');
const router = require('./routes');

const app = express();

app.use(express.json());

app.use(router)


app.get('/health', (_req, res) => {
  return res.status(201).send('tá saudável');
});

app.listen(3001, () => console.log('conectado na porta 3001'));
