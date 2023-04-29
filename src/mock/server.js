const express = require('express');
const cors = require('cors');
const app = express();
const port = 3999;

const USERS = [
  'Киркоров',
  'Один',
  'Мышь',
  'Чайник',
  'Варвара',
  'Царь',
  'Java',
  'Apple',
  'Капитан',
  'Стас',
  'Жили-были',
  'Docker',
  'Спарта',
  'Нагибатор',
];
const random = () => (Math.floor(Math.random() * USERS.length));
const getUser = () => {
  const r = random();
  return USERS[r];
}

app.use(cors());

app.get('/users', (req, res) => {
  res.send({
    userA: getUser(),
    userB: getUser(),
  })
})

app.get('/update', (req, res) => {
  res.send({
    success: true,
    errors: [],
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})