const express = require('express');
const app = express();


app.get("/", function(req, res){  // "/" home or route page
  res.send("<h1>Heeello World!</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at: tdscottjr@gmail.com");
});

app.get("/about", function(req, res){
  res.send("<h1>Hello my name is Tyrone Scott and I am a Full Stack developer</h1>")
})

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
