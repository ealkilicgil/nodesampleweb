var express=require("express");
var app=express();

var port=process.env.PORT;

app.get('/',function(request,response){
   response.send('Helloooooo!!!'); 
    
});
app.get('/routing',function(request,response){
   response.send('Helloooooo routing!!!'); 
    
});
app.listen(port,function(err){
    
    console.log('Server is running on port: '+port);
});