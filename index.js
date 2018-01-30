const express = require('express');
const app = express()
const articles = [{ title:'Example'}];

app.set('port', process.env.PORT || 3000);

app.get('/articles', (req,res) => {
    res.send(articles);
});

app.post('/articles', (req,res,next) => {
    res.send('OK');
});

app.get('/articles/:id', (req,res,next) => {
    const id = req.params.id;
    console.log('Fetching ', id);
    res.send(articles[id]);
});

app.delete('/articles/:id', (req, res, next) => {
    const id = req.params.id;
    console.log('Deleting:', id);
    delete articles[id];
    res.send({ Message: 'Deleted'});
});

app.listen(app.get('port'), () => console.log('Express app started on port ', app.get('port')));
