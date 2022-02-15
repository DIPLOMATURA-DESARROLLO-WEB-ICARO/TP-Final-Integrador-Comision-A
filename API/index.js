const express = require('express');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`App Icaro puerto ${port} by Liz, Daniel y Diego`);
});

const api = 'https://icaro-api-v1.herokuapp.com/api';

//Rutas Api

// ● POST /login -> Permite el login de usuarios, este devuelve un header que identifica al
// usuario y la sesión.

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  fetch(`${api}/login`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => res.send(data))
    .catch((e) => console.log('error:', e));
});

// ● GET /api/users -> Obtención de todos los usuarios registrados de la plataforma.

app.get('/users', (req, res) => {
  fetch(`${api}/users`)
    .then((response) => response.json())
    .then((data) => res.send(data))
    .catch((e) => console.log('error:', e));
});

// ● POST /api/users -> Permite el registro de usuarios.

app.post('/api/users', (req, res) => {
  const { username, firstName, lastName, password, country, city } = req.body;

  fetch(`${api}/users`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      firstName,
      lastName,
      password,
      country,
      city,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => res.send(data))
    .catch((e) => console.log('error:', e));
});

// ● GET /api/users/<username>/messages/inbox -> Mensajes recibidos por X usuario.

app.get('/api/users/:username/messages/inbox', (req, res) => {
  const { username } = req.params;

  fetch(`${api}/users/${username}/messages/inbox`)
    .then((response) => response.json())
    .then((data) => res.send(data))
    .catch((e) => console.log('error:', e));
});

// ● GET /api/users/<username>/messages/sent -> Mensajes enviados por X usuario.

app.get('/api/users/:username/messages/sent', (req, res) => {
  const { username } = req.params;

  fetch(`${api}/users/${username}/messages/sent`)
    .then((response) => response.json())
    .then((data) => res.send(data))
    .catch((e) => console.log('error:', e));
});

// ● POST /api/users/<username>/messages -> Enviar un mensaje a N destinatarios.

app.post('/api/users/:username/messages', (req, res) => {
  const { username } = req.params;
  const { receiverId, text } = req.body;

  fetch(`${api}/users/${username}/messages`, {
    method: 'POST',
    body: JSON.stringify({
      receiverId,
      text,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => res.send(data))
    .catch((e) => console.log('error:', e));
});
