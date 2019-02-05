const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const dist = path.join(__dirname, '../dist')

app.use(express.static(dist));
app.listen(port, () => console.log(`Example app listening on port ${port}`));