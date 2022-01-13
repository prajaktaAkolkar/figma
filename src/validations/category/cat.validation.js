import {body} from 'express-validator';
export default function catValidation() {
    return [
      // username must be an email
      body('category_title').notEmpty().withMessage("Title required").isString().withMessage("Title must be a string").isLength({min: 3 , max : 30}).withMessage("Title must be between 3 to 20 characters"),
      // password must be at least 5 chars long
      body('category_description').notEmpty().withMessage("Description required").isString().withMessage("Title must be a string"),
      body('category_position').notEmpty().withMessage("Position required").isInt({ min: 0, max: 10 }).withMessage("Enter position value between 0 to 10"),
       ]
  }