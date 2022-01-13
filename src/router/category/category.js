import express from 'express';
import CategoryController  from '../../controllers/category/category.js';
import validate  from '../../validations/validate.js';
import catValidation from '../../validations/category/cat.validation.js';
const controller = new CategoryController();

let router = express.Router();
router.post('/categoryCreate',catValidation(),validate, controller.categoryCreate);
router.get('/catgetreq',(req,res)=>{
    res.send("hello from Category Router");
   })

export default router;

