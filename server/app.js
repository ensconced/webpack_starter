const express = require('express');
const path = require('path');
const app = express();
const dist = path.join(__dirname, '../dist')

app.use(express.static(dist));
app.listen(process.env.PORT || 3000, () => console.log(`Example app listening on port ${port}`));
