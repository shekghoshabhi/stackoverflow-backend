var app = require('express')();
const port = 3000 ;


app.get('/',(req,res)=>{
    res.send("send ")
})

app.listen(port , ()=>{
    console.log("running shit")

})