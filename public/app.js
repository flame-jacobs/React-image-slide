const express = require('express');
const app = express();
const fileHandler = require('fs');

app.get('/', (req, res) => {
    res.send("add api to the '/done'") 
    res.end()
})

app.get('/done', (req, res) => {
    fileHandler.readFile('data.json', (err, data) => {
        if (err) res.send('File not found. First post to create file.');
        else
            res.send(data)
})
})

app.listen(3003, () => {
    console.log("server is up and listening on 3003...")
})