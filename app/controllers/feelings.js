const feeling = require('../modals/feelings');
const user = require("../modals/user");

module.exports = {
    async createFeelings(req, res) {
        let newFeeling = await new feeling(req.body);
        newFeeling.save()
            .then((data) => {
                user.findByIdAndUpdate({ '_id': req.params.userId }, { $set: { disputeId: data._id } })
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