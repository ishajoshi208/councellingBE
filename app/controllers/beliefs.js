const belief = require('../modals/beliefs');
const user = require("../modals/user");

module.exports = {
    async createBelief(req, res) {
        let newBelief = await new belief(req.body);
        newBelief.save()
            .then((data) => {
                user.findByIdAndUpdate({ '_id': req.params.userId }, { $set: { beliefId: data._id } })
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