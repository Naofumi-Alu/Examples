
  //statements

const controller=require('../Controller/routesController.js');

module.exports= app => {
    
  

    //routes
    
    app.get('/',controller.routeGet);
    
    app.get('/contact',controller.getContact);
    
    app.post('/register',controller.postRegister);
    
    app.put('/userInf:id',controller.userInfUpdate);
    
    app.delete('/userInf:id',controller.userInfDelete);
};

