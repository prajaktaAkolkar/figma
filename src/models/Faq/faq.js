// const express = require('express');

//const db = require('../../database/db');

//import { DATETIME } from 'mysql/lib/protocol/constants/types';
import db from '../../database/db.js';
//let db = new db().conn.promise();

export default class FaqModel {

   
     async createFaq(req){
         console.log('faqmodel',req.body);
         const sql = await db.promise().query('SELECT `category`,`position` FROM `faq`');
         console.log('createFq sql query');
         console.log(sql);
         if(sql.position != req.body.position)
         
         {
         const rows = await db.promise().query('INSERT INTO `faq`(`title`,`category`,`position`,`description`,`image`,`createdAt`)VALUES(?,?,?,?,?,?)', [
                              req.body.title,
                              req.body.category,
                              req.body.position,
                              req.body.description,
                              req.body.image,
                              new Date()
                        ]);
         console.log('rows', rows);
         return Promise.resolve(req.body);
      }
     
     
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

    async deleteFaq(id){
        const rows = await db.promise().query("DELETE FROM `faq` WHERE `id`=?", [id]);
        console.log('rows', rows);
        return Promise.resolve(rows);
    }

     
 
    
 
    
    
 
 }