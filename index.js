const express =require("express");

const server =express();

const dotenv =require("dotenv");

const fibonacci =require("./fibonacci.js");

dotenv.config();

const port= process.env.PORT || 8000;

server.use(express.json());

server.listen(port,()=>{
  console.log("Listening to port", port);
})


server.get('/fibonacci/:upto',(req, res)=>{
  const upto=req.params.upto;
  
  res.send(fibonacci(upto));
}
) 