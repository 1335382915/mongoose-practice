const models = require("./schema");
module.exports = function(req, res) {
    const name = req.query.name;
    const age = req.query.age;
    const _id = req.query._id;
    models.User.update({_id}, {name, age}, function(err, user) {
        console.log("succeed");
        if(err) {
            res.json({
                retCode: -1,
                retMsg: "updateError"
            })
        }
        res.json({
            retCode: 0,
            retInfo: user
        })
    })
}