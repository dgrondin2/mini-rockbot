require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 8081;
const baseUrl = 'https://api.rockbot.com/v3/engage/';

const headers = {
  Authorization: process.env.API_KEY
};

app.use(cors());

app.get('/api/now_playing', (req, res) => {
  axios({
    method: 'get',
    url: baseUrl + 'now_playing',
    headers: headers
  }).then((response) => {
    console.log(response.data);
    res.send(response.data);
  }).catch((error) => {
    console.log(error);
  });
});

app.get('/api/top_artists', (req, res) => {
  axios({
    method: 'get',
    url: baseUrl + 'top_artists',
    headers: headers
  }).then((response) => {
    console.log(response.data);
    res.send(response.data);
  }).catch((error) => {
    console.log(error);
  });
});

app.get('/api/browse_artists', (req, res) => {
  let url = baseUrl + 'browse_artists';
  if (req.query && req.query.letter) {
    url += '?letter=' + req.query.letter;
  }
  axios({
    method: 'get',
    url: url,
    headers: headers
  }).then((response) => {
    console.log(response.data);
    res.send(response.data);
  }).catch((error) => {
    console.log(error);
  });
});

app.get('/api/search_artists', (req, res) => {
  let url = baseUrl + 'search_artists';
  console.log(req);
  if (req.query && req.query.query) {

    url += '?query=' + req.query.query;
  }
  else {
    console.log('called /api/search_artists without a query')
    res.send();
  }
  axios({
    method: 'get',
    url: url,
    headers: headers
  }).then((response) => {
    console.log(req);
    // console.log(response.data);
    res.send(response.data);
  }).catch((error) => {
    console.log(error);
  });
});


app.listen(port, () => {
  console.log(`Mini Rockbot server listening on port ${port}`)
})