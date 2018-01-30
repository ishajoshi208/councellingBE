const dispute = require('../modals/disputes');
const user = require("../modals/user");

module.exports = {
    async createDisputes(req, res) {
        let newDispute = await new dispute(req.body);
        newDispute.save()
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