const consequence = require('../modals/consequences');
const user = require("../modals/user");

module.exports = {
    async createConsequences(req, res) {
        let newConsequence = await new consequence(req.body);
        newConsequence.save()
            .then((data) => {
                user.findByIdAndUpdate({ '_id': req.params.userId }, { $set: { consequenceId: data._id } })
                    .exec((err, data) => {
                        if (err) {
                            res.json({
                                success: false,
                                message: "user not found"
                            })
                        }
                        else {
                            res.json({
                                success: true,
                                data: data,
                                message: 'valid data'
                            })
                        }
                    })
            })
            .catch((err) => {
                res.json({
                    success: false,
                    message: 'error occured'
                })
            })
    }
}