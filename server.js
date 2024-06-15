const express = require('express');
const path = require('path');

const app= express();

app.use(express.static('./dist/test-spa'));

app.get('/*', (req, res) => {
    res.sendFile('index.html', {root: 'dist/test-spa'})
});

app.listen(process.env.PORT || 8080);
