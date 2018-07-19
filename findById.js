const models = require("./schema");

module.exports = function(req, res) {
    const _id = req.query._id;
    models.User.findById(_id, (err, result) => {
        if(err) {
            res.json({
                retCode: -1,
                retMsg: "findError"
            })
        }
        res.json({
            retCode: 0,
            retInfo: result
        })
    })
}