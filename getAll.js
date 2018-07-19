const models = require("./schema");

module.exports = function(req, res) {
    models.User.find((err, result) => {
        if(err) {
            res.json({
                retCode: -1,
                retMsg: "getAllError"
            })
        }
        res.json({
            retCode: 0,
            retInfo: result
        })
    });
}