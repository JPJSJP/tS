var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.set('views', './views');
app.set('view engine', 'ejs')

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended:false }))


app.get('/', (req,res)=>{
    console.log('user');
    res.render('main');
})

app.get('/first', (req,res)=>{
    res.redirect('/')
})





app.listen(3000, ()=>{
    console.log('connected 3000 port');
})





