var express = require("express");
var app = express();

app.get('/', (req,res) => {
res.send("Hello Node from heroku");
});

var port = Number(process.env.port || 5000);

app.listen(port,() =>{
    console.log('Listening on ' +port);
})