//statements
const express = require('express');
const app = express();
const path = require('path');
const dev =require('morgan');


//settings

app.set("port",8080 || process.env.port );
let port = app.get('port');
app.set('view engine','ejs');
app.set("views",path.join(__dirname,"views"));
app.engine('html',require('ejs').renderFile);


//mmidlewhere

app.use(dev('dev'));
//Entiende los json que llegan del navegador
app.use(express.json());
//entiende que recibe desde el navegador por url
app.use(express.urlencoded({extended:false}));

//Routes

app.use(require('./app/Routes/index.js'));



//Static files

app.use(express.static(path.join(__dirname,'public')));

//Listening



app.listen(app.get('port'),()=>{
    console.log('server listen in PORT ',port);
});




