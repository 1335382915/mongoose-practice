const models = require("./schema");

module.exports = function(req, res) {
    models.User.remove((err, result) => {
        if(err) {
            res.json({
                retCode: -1,
                retMsg: "removeAllError"
            })
        }
        res.json({
            retCode: 0
        })
    })
}