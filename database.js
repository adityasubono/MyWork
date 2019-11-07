//Variabel Pemanggilan Database Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Tabel Buat Schema Superhero
var Superhero = new Schema({
    name: String
});

//Tabel Buat Schema Employe
var Employe = new Schema({
    name: String,
    position: String,
    office: String,
    age: String,
    salary: String,
    start_date: String,
    phone_number: String
});

//Tabel Buat Schema Product
var Product = new Schema({
    name: String,
    type_product: String,
    stock: String,
    description: String,
    price: String,
    created_at: Date,
    updated_at: Date

});
//Model Employe
mongoose.model('products', Product);
//Model Employe
mongoose.model('employes', Employe);
//Model Superhero
mongoose.model('superheros', Superhero);
//Model Connect Database MongoDB ke node-superhero
mongoose.connect('mongodb://localhost/node-superhero');