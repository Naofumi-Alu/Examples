const app = require('./config/server');

//Routes

require('./app/Routes/index')(app);

//starting the server

let port = app.get('port');

app.listen(app.get('port'),()=>{
    console.log('server listen in PORT ',port);
});




