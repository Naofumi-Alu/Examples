// Controller of Routes


//Data Base Connection


//Statements

const routeGet= (req,res)=>{
    res.render('index.html',{title:'any name Shop'});
};

const getContact= (req,res)=>{
    res.render('contact.html',{title:'any name Shop'});
};


const postRegister=(req,res)=>{
    
};
const userInfUpdate=(req,res)=>{
    
};
const userInfDelete=(req,res)=>{
    
};

module.exports={
    routeGet,
    postRegister,
    userInfUpdate,
    userInfDelete,
    getContact
}
