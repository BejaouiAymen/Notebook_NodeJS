const { query } = require('express');
const { JsonWebTokenError } = require('jsonwebtoken');
const Note = require('../models/notebook.model') ;
express = require('express') ;
const User = require('../models/user.model') ;


var router = express.Router () ;


router.get('/team',(req,res)=>{
    var tittle = 'Modifier Note' ;
    var query;
    User.find(query,(err, docs) => {
        if (!err) {
           
            res.render("user/management", {
                users: docs,
               
                
                
            });
            //console.log(docs[0]._id);
        }
        else {
            console.log('Error in retrieving users list :' + err);
        }
    }).lean()
    // execute query
    .exec(function(error, body) {});
   
})

router.get('/delete/:id', (req, res) => {
  
    User.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            Note.deleteMany({ owner:req.params.id }, function(err) {});
            res.redirect('/notebook/list');
        }
        else { console.log('Erreur lors du suppression du Note :' + err); }
    });
});

module.exports = router ;