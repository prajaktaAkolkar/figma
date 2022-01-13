import express from 'express';
//const FaqController = require('../../controllers/faq/faq');
import FaqController  from '../../controllers/faq/faq.js';
import validate  from '../../validations/validate.js';
import faqValidation from '../../validations/faq/faq.validations.js';
const controller = new FaqController();

let router = express.Router();


 
 router.post('/faqcreate',faqValidation(),validate, controller.faqCreate);
 router.put('/faqupdate/:id',faqValidation(),validate, controller.faqUpdate);
 
 router.delete('/deleteFaq/:id', controller.deleteFaq);
 router.get('/faqlist',controller.faqList);
 router.get('/faqSearchtitleList/:title',controller.faqSearchtitleList);
 router.get('/faqCategoryList/:category',controller.faqCategoryList);
 router.get('/getreq',(req,res)=>{
  res.send("hello");
 })

export default router;