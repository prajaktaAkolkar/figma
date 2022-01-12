import {  validationResult } from 'express-validator';
export default function validate  (req, res, next)  {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    } 
    const extractedErrors = {};
    errors.array().map(err => {
      if(!extractedErrors[err.param]) {
        extractedErrors[err.param] = err.msg;
      }
      // extractedErrors.push({ [err.param]: err.msg }) 
    })
  
    let errResp = [];
    Object.keys(extractedErrors).forEach(key => {
      let obj = {};
      obj[key] = extractedErrors[key];
      errResp.push(obj);
    })
    return res.status(422).json({
      errors: errResp,
    })
  }