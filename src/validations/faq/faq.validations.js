import {body} from 'express-validator';
export default function faqValidation() {
    return [
      // username must be an email
      body('title').notEmpty().withMessage("Title required").isString().withMessage("Title must be a string").isLength({min: 3 , max : 30}).withMessage("Title must be between 3 to 20 characters"),
      // password must be at least 5 chars long
      body('category').notEmpty().withMessage("Category required").isInt({ min: 0, max: 10 }).withMessage("Enter category value between 0 to 10"),
      body('position').notEmpty().withMessage("Position required").isInt({ min: 0, max: 10 }).withMessage("Enter position value between 0 to 10"),
      body('description').notEmpty().withMessage("Description required").isString().withMessage("Description must be a string"),
      body('image').notEmpty().withMessage("Image required").isString().withMessage("Image must be a string")
    ]
  }