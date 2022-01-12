

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import faqRouter from '../src/router/faq/faq.js';
//import stuRouter from './router/stud';
let app = express();

app.use(express.json());

app.use(cors());
app.use(bodyParser.json());
debugger;
//app.use(stuRouter);
app.use(faqRouter);
app.use((err,req,res,next)=>{
 err.statusCode = err.statusCode ||  500;
 err.message =err.message ||"InternalServer error";
 res.status(err.statusCode).json({
     message :err.message,
 });
});




app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});
