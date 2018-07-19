const express = require("express");
const mongoose = require("mongoose");
const app = express();

const add = require("./add");
const getAll = require("./getAll");
const deleteAll = require("./deleteAll");
const update = require("./update.js");
const _delete = require("./delete");
const findById = require("./findById");
const models = require("./schema")

app.use(express.static('fontend'));

app.get("/add.json", (req, res) => {
    add(req, res);
})

app.get("/getAll.json", (req, res) => {
    getAll(req, res);
})

app.get("/deleteAll.json", (req, res) => {
    deleteAll(req, res);
})

app.get("/update.json", (req, res) => {
    update(req, res);
})
app.get("/delete.json", (req, res) => {
    _delete(req, res);
})
app.get("/findById.json", (req, res) => {
    findById(req, res);
})

// app.get("/", (req, res) => {
//     // const table2 = new models.Table2({
//     //     categoryName: "水果"
//     // })
//     // table2.save((err, result) => {
//     //     if(err) console.log(err)
//     //     console.log(result);
//     // })
//     console.log(models.Table2);
// })

mongoose.connect('mongodb://localhost/db');

const db = mongoose.connection;

db.on("err", err => {
    console.log(err);
})

db.once("open", () => {
    console.log("连接成功");
    models.Table1.findById("5b503e6832734a27bc2e4f46").populate("categoryId").exec((err, result) => {
        if(err) console.log(err);
        console.log(result)
        process.exit(0)
    })
    // models.Table1.create({
    //     "foodName": "苹果",
    //     "foodKJ": 1000,
    //     categoryId: "5b5031dc67f0fc19b0446434"
    // }, function(err, result) {
    //     if(err) console.log(err)
    //     console.log(result);
    //     process.exit(0)
    // })
    // models.Table1.findById("5b503d4fdb3b582c9c1ea644", (err, result) => {
    //     if(err) console.log(err)
    //     console.log(result)
    // })
    // models.Table2.findById("5b5031dc67f0fc19b0446434", (err, result) => {
    //     if(err) console.log(err)
    //     console.log(result)
    // })
})

app.listen(8999);


