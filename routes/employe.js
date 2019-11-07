var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Employe = mongoose.model('employes');

//view data 
router.get('/employes', function (req, res) {
    Employe.find(function (err, employes) {
        console.log(employes)
        res.render(
            'employe', {
                title: 'Data Employes',
                employes: employes
            }
        );
    });
});

//insert data employe
router.post('/employes', function (req, res) {
    new Employe({
            name: req.body.name,
            position: req.body.position,
            office: req.body.office,
            age: req.body.age,
            salary: req.body.salary,
            start_date: req.body.start_date,
            phone_number: req.body.phone_number

        })
        .save(function (err, employe) {
            console.log(employe)
            res.redirect('/employe/employes');
        });
});
//router get data employe
router.get('/get_data_employe/:id', function (req, res) {
    var query = {
        "_id": req.params.id
    };
    Employe.findOne(query, function (err, employe) {
        console.log(employe)
        res.render(
            'edit_employe', {
                title: 'Update Data Employees :' + employe.name,
                employe: employe
            }
        );
    });
});

//router update
router.put('/put_update_data_employe/:id', function (req, res) {
    var query = {
        "_id": req.params.id
    };
    var update = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        age: req.body.age,
        salary: req.body.salary,
        start_date: req.body.start_date,
        phone_number: req.body.phone_number
    };
    var options = {
        new: true
    };
    Employe.findOneAndUpdate(query, update, options, function (err, employe) {
        console.log(employe)
        res.redirect('/employe/employes');

    });
});

//detail data employe
router.get('/detail_data_employe/:id', function (req, res) {
    var query = {
        "_id": req.params.id
    };
    Employe.findOne(query, function (err, employe) {
        console.log(employe)
        res.render(
            'detail_employe', {
                title: 'Detail Data Employe ',
                employe: employe
            }
        );
    });
});

// //router dalete
// router.delete('/delete_data_employe/:id', function (req, res) {
//     var query = {
//         "_id": req.params.id
//     };
//     Employe.findOneAndRemove(query, function (err, employe) {
//         console.log(employe)
//         res.redirect('/employe/employes');
//     });
// });

//router dalete
router.get('/delete_data_employe/:id', function (req, res) {
    var query = {
        "_id": req.params.id
    };
    Employe.findOneAndRemove(query, function (err, employe) {
        console.log(employe)
        res.redirect('/employe/employes');
    });
});
//module ruoute
module.exports = router;