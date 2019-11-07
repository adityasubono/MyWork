var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = mongoose.model('products');

//view data 
router.get('/products', function (req, res) {
    Product.find(function (err, products) {
        console.log(products)
        res.render(
            'product', {
                title: 'Data Products',
                products: products
            }
        );
    });
});

//insert data product
router.post('/products', function (req, res) {
    new Product({
            name: req.body.name,
            type_product: req.body.type_product,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock
        })
        .save(function (err, product) {
            console.log(product)
            res.redirect('/product/products');
        });
});

//router get data product
router.get('/get_data_product/:id', function (req, res) {
    var query = {
        "_id": req.params.id
    };
    Product.findOne(query, function (err, product) {
        console.log(product)
        res.render(
            'edit_product', {
                title: 'Update Data Product :' + product.name,
                product: product
            }
        );
    });
});

//router update
router.put('/put_update_data_product/:id', function (req, res) {
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
    Product.findOneAndUpdate(query, update, options, function (err, employe) {
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
module.exports = router;