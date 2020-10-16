let express = require('express');
let app = express();
let router = require('./routes/router');
let mongoose = require('mongoose');

let bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost:27017/grouperdb' ,{useNewUrlParser : true}, (error)=>{
    if(error)
    {
        console.log(error);
    }else{
        console.log('success');
    }
});

app.set('view engine' , 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/' , (req , res)=>{

 res.render('index');

});

app.get('/register' , router);
app.get('/login' , router);
app.post('/register' , router);

 



app.listen(8080);



