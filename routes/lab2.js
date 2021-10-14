const express = require('express');
const router = express.Router();

//get home page
router.get('/', (request, response, next) => {
    
    var tempValueX = request.query.x;
    var tempValueY = request.query.y;
    var a = parseInt(tempValueX, 10);
    var b = parseInt(tempValueY, 10);
    var methods = request.query.method;
    var total;
    //for addition
    if(request.query.method == 'add'){
        total = a+b;
    }
     //for divition
     else if(request.query.method == 'divide'){
        total = a/b;
    }
    //for subtraction
    else if(request.query.method == 'subtract'){
        total = a-b;
    }
    //for multiplication
    else if(request.query.method == 'multiply'){
        total = a*b;
    }
    //for the method error 
    else{
            response.json('invalid missing method try using add , divide, subtract, multiply');
    }
    //for the x error
    if(!request.query.x){
        response.json('invalid missing x');
    }
    // for the y error
    if(!request.query.y){
        response.json('invalid missig y ');
    }
    //for both
    if (!request.query.y&&!request.query.x){
        response.json('invalid missig x&y ')
    }

    //sending back the data 
    response.json({

        "x" : a,

        "y" : b,

        "operation" : methods,

        "result" : total
    });
});

module.exports = router;