var app = require('express')();
const port = 3000 ;

const mongoos = require('mongoose')
const link = 'mongodb+srv://admin:admin@cluster0.j6t63.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoos.connect(link)
.then((db)=>{
    console.log('mongoose connected')
}).catch(err=>{
    console.log(err)
})


app.get('/',(req,res)=>{
    res.send("send ")
})

app.listen(port , ()=>{
    console.log("running shit")

})