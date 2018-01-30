const express = require('express');
const app = express()
const articles = [{ title:'Example'}];
const bodyParser = require('body-parser');
const Article = require('./db').Article;

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/articles', (req,res,next) => {
    Article.all((err, articles) => {
        if (err) return next(err);
        res.send(articles);
    });
});

app.get('/articles/:id', (req,res,next) => {
    const id = req.params.id;
    Article.find(id, (err,article) => {
        if (err) return next(err);
        res.send(article);
    });
});

app.delete('/articles/:id', (req, res, next) => {
    const id = req.params.id;
    Article.delete(id, (err) => {
        if (err) return next(err);
        res.send({ Message: 'Deleted'});
    })
});

app.listen(app.get('port'), () => console.log('Express app started on port ', app.get('port')));

module.exports = app;

