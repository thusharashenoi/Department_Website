const express =require("express");
const app=express();
const port=8000;


app.get('/',function(request,response){
    return response.send('Thushara')
})

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Running: ${port}`);
});