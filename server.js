const express = require('express');
const path = require('path');

const app= express();

app.use(express.static('./dist/test-task'));

app.get('/*', (req, res) => {
    res.sendFile('index.html', {root: 'dist/test-task/browser'})
});

app.listen(process.env.PORT || 8080);
