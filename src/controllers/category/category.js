import CategoryModel from "../../models/category/category.js";
import async from "async";


let categoryModel = new CategoryModel;
export default class CategoryController{
    categoryCreate(req,res,next) {
        console.log('faq controller');
        async.waterfall([
            function (done) {
                categoryModel.checkCategory(req).then((results) => {
                     if (results.length == 1) {
                        console.log('----in----------')
                        res.status(400).json({code: 400 , message : 'Already assign this postion', result: results });
                    } else {
                        done()
                        console.log('----out----------');
                    }

                }).catch((error) => {
                    
                res.status(500).json({code: 500 , message : error.message });
                return;
                })
            },
                function (done) {
                    categoryModel.createCategory(req).then((results) => {
                         if (results.affectedRows > 0) {
                           
                            res.status(200).json({code: 200 , message : 'Success', result: results });
                        } else {
                          
                             res.status(400).json({code: 400 , message : 'Failed', result: results });
                        }

                    }).catch((error) => {
                        
                        res.status(500).json({code: 500 , message : error.message });
                        return;
                        })
                }
            ]) 
        }
      
}