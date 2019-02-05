const express = require('express');
const path = require('path');
const app = express();
const dist = path.join(__dirname, '../dist')

app.use(express.static(dist));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}`));
