const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.send('Maratona Full Cycle 2.0');
});

app.listen(3000, () => {
  console.log('🚀 Server running!');
});