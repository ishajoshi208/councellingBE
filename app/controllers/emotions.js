const emotion = require('../modals/emotions');
const user = require("../modals/user");

module.exports = {
    async createEmotions(req, res) {
        let newEmotion = await new emotion(req.body);
        newEmotion.save()
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