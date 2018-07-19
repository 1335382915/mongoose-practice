const models = require("./schema");
module.exports = function(req, res) {
    const name = req.query.name;
    const age = req.query.age;
    const user = new models.User({name, age});
    user.save((err, user) => {
        console.log("succeed");
        if(err) {
            res.json({
                retCode: -1,
                retMsg: "addError"
            })
        }
        res.json({
            retCode: 0,
            retInfo: user
        })
    })
    
}