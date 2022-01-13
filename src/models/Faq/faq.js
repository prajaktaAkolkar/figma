// const express = require('express');

//const db = require('../../database/db');

//import { DATETIME } from 'mysql/lib/protocol/constants/types';
import db from '../../database/db.js';
//let db = new db().conn.promise();

export default class FaqModel {

    async checkFaq(req){
        const sql = await db.promise().query( 'SELECT * FROM `faq` WHERE `category` = ? AND `position` = ? LIMIT 1',[req.body.category , req.body.position] );
        const data = sql[0];
        return data;

    }


     async createFaq(req){
         const rows = await db.promise().query('INSERT INTO `faq`(`title`,`category`,`position`,`description`,`image`,`createdAt`)VALUES(?,?,?,?,?,?)', [
                              req.body.title,
                              req.body.category,
                              req.body.position,
                              req.body.description,
                              req.body.image,
                              new Date() 
                        ]);
          return rows[0];                   
     }

     async checkUpdateFaq(req){
        const sql = await db.promise().query( 'SELECT * FROM `faq` WHERE `category` = ? AND `position` = ? AND `id` != ?;',[req.body.category,req.body.position,req.params.id] );
        const data = sql[0];
        console.log('checkUpdateFaq',sql);
        return data;

    }
  

     async updateFaq(req){
        const rows = await db.promise().query("UPDATE faq SET title = ?,category = ?,position = ?,description = ?,image = ?,modifiedAt= ? WHERE id = ?", [
            req.body.title,
            req.body.category,
            req.body.position,
            req.body.description,
            req.body.image,
            new Date(),
            req.params.id
                         ])
        console.log('rows', rows);
        return rows[0];
       
    }

    async getAllFaq(req){
        const rows = await db.promise().query("SELECT * FROM `faq`");
        console.log('rows', rows[0]);
        return Promise.resolve(rows[0]);
    }

   

    async getFaqTitleSearch(req){
        const title = req.params.title;
        const rows = await db.promise().query(`SELECT * FROM faq WHERE title LIKE '%`+ title +`%' `);
        console.log('rows', rows[0]);
        return Promise.resolve(rows[0]);
    }
    
    async getFaqCategoryList(req){
        const category = req.params.category;
        const rows = await db.promise().query("SELECT * FROM faq WHERE category = ?" , [category]);
        console.log('rows', rows[0]);
        return Promise.resolve(rows[0]);
    }
    async checkDeleteFaq(req){
        const sql = await db.promise().query( 'SELECT * FROM `faq` WHERE `id` = ?;',[req.params.id] );
        const data = sql[0];
       
        return data;
    }

    async deleteFaq(id){
        const rows = await db.promise().query("DELETE FROM `faq` WHERE `id`=?", [id]);
        console.log('rows', rows);
        return Promise.resolve(rows);
    }

     
 
    
 
    
    
 
 }