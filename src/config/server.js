//statements
const express = require('express');
const app = express();
const path = require('path');
const dev =require('morgan');
const bodyParser = require('body-parser');



//settings

app.set("port",process.env.port || 8080);
let port = app.get('port');
app.set('view engine','ejs');
app.set("views",path.join(__dirname,"../app/views"));
app.engine('html',require('ejs').renderFile);


//mmidlewhere

app.use(dev('dev'));
//Entiende los json que llegan del navegador
app.use(express.json());
//entiende que recibe desde el navegador por url
app.use(bodyParser.urlencoded({extended:false}));

//Static files
app.use(express.static(path.join(__dirname,'../public')));


//exportacion de archivo de configuracion


module.exports=app;




