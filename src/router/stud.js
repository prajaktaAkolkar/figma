import express from 'express';
//const FaqController = require('../../controllers/faq/faq');


const router = new  express.Router();


 router.get('/getreq',(req,res)=>{
  res.send("hello");
 })

 module.exports =router;