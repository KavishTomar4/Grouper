let express = require('express');
let app = express();
let router = require('./routes/router');

app.set('view engine' , 'ejs');

app.get('/' , (req , res)=>{

 res.render('index');

});

app.get('/register' , router);
app.get('/login' , router);



app.listen(8080);



