const express = require('express')
const app = express();

app.get('/', (req, res) => res.send('You are at home!'));

app.listen(3000, () => console.log('Factpro app listening on port 3000!'))
