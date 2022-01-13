import db from '../../database/db.js';


export default class CategoryModel{
    async checkCategory(req){
        const sql = await db.promise().query('SELECT * FROM `faq_category` WHERE `category_title`=? AND `category_position` = ? LIMIT 1',[req.body.category_title,req.body.category_position] );
        const data = sql[0];
        return data;

    }


     async createCategory(req){
         const rows = await db.promise().query('INSERT INTO `faq_category`(`category_title`,`category_description`,`category_position`,`createdAt`)VALUES(?,?,?,?)', [
                              req.body.category_title,
                              req.body.category_description,
                              req.body.category_position,
                              new Date() 
                        ]);
          return rows[0];                   
     }

}