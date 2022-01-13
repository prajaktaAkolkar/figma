
import FaqModel from '../../models/Faq/faq.js';
import async from "async";

let faqModel = new FaqModel;
export default class FaqController{
    faqCreate(req,res,next) {
        console.log('faq controller');
        async.waterfall([
            function (done) {
                faqModel.checkFaq(req).then((results) => {
                     if (results.length >= 1) {
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
                    faqModel.createFaq(req).then((results) => {
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
      
        faqUpdate(req,res,next) {
            console.log('faq controller');
            async.waterfall([
                function (done) {
                    faqModel.checkUpdateFaq(req).then((results) => {
                         if (results.length < 1) {
                            console.log('----in----------')
                            done()
                           // res.status(400).json({code: 400 , message : 'Already assign this postion', result: results });
                        } else {
                            //done()
                            console.log('----out----------');
                             res.status(400).json({code: 400 , message : 'Already assign this postion', result: results })
                        }
    
                    }).catch((error) => {
                        
                    res.status(500).json({code: 500 , message : error.message });
                    return;
                    })
                },
               
                    function (done) {
                        faqModel.updateFaq(req).then((results) => {
                           
                               if(results.affectedRows>0)
                               {
                                res.status(200).json({code: 200 , message : 'Success', result: results });
                               }
                               else
                               {
                                res.status(400).json({code: 400 , message : 'Record Not Exist.' });  
                               }
    
                        }).catch((error) => {
                            
                            res.status(500).json({code: 500 , message : error.message });
                            return;
                            })
                    }
                ]) 
            }
            faqList(req,res,next) {
                console.log('faq controller');
                async.waterfall([
                        function (done) {
                            faqModel.getAllFaq(req).then((results) => {
                                if (results) {
                                   
                                    res.status(200).json({code:200 , message :'List' , result: results});
                                } else {
                                  
                                    res.status(400).json({code:400 , message : 'Records Not Found'});
                                }
        
                            }).catch((error) => {
                                
                                res.status(500).json({code:500, message : error.message});
                                return;
                                })
                        }
                    ]) 
                }
                


                    faqSearchtitleList(req,res,next) {
                        console.log('faq controller');
                        async.waterfall([
                                function (done) {
                                    faqModel.getFaqTitleSearch(req).then((results) => {
                                        if (results) {
                                           
                                            res.status(200).json({code:200 , message :'List' , result: results});
                                        } else {
                                          
                                            res.status(400).json({code:400 , message : 'Records Not Found'});
                                        }
                
                                    }).catch((error) => {
                                        
                                        res.status(500).json({code:500, message : error.message});
                                        return;
                                        })
                                }
                            ]) 
                        }

                        faqCategoryList(req,res,next) {
                            console.log('faq controller');
                            async.waterfall([
                                    function (done) {
                                        faqModel.getFaqCategoryList(req).then((results) => {
                                            if (results) {
                                               
                                                res.status(200).json({code:200 , message :'List' , result: results});
                                            } else {
                                              
                                                res.status(400).json({code:400 , message : 'Records Not Found'});
                                            }
                    
                                        }).catch((error) => {
                                            
                                            res.status(500).json({code:500, message : error.message});
                                            return;
                                            })
                                    }
                                ]) 
                            }

                deleteFaq(req, res,next) {  
                   async.waterfall([
                     function(done) {
                        faqModel.checkDeleteFaq(req).then((results) => {
                             if (results.length > 0) {
                                console.log('----in----------')
                                done()
                               // res.status(400).json({code: 400 , message : 'Already assign this postion', result: results });
                            } else {
                                //done()
                                console.log('----out----------');
                                 res.status(400).json({code: 400 , message : 'Id Not Exists.Please Enter Correct ID', result: results })
                            }
        
                        }).catch((error) => {
                            
                        res.status(500).json({code: 500 , message : error.message });
                        return;
                        })
                    },
                       function(done){
                    faqModel.deleteFaq(req.params.id).then((results) => {
                        console.log(results);
                        res.status(200).json({code: 200 , message : 'Record Delete Successfully '});
                    }).catch((error) => {
                        res.status(500).json({code: 500 , message : error.message });
                        return;
                        })
                       }
                    ])
                                }
    
    }
   