const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = Schema({
    name: String,
    age: Number
});

const table1 = Schema({
    foodName: String,
    foodKJ: Number,
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "table2"
    }
})

const table2 = Schema({
    categoryName: String
})

module.exports = {
    User: mongoose.model("user", userSchema),
    Table1: mongoose.model("table1", table1),
    Table2: mongoose.model("table2", table2)
}