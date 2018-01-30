const event = require("../modals/events");
const user = require("../modals/user");

module.exports = {
    async createEvent(req, res) {
        let newEvent = await new event(req.body)
        console.log("new event",newEvent);
        newEvent.save()
            .then((data) => {
                user.findByIdAndUpdate({ '_id': req.params.userId }, { $set: { eventId: data._id } })
                    .exec(function(err, data){
                        if (data) {
                            res.json({
                                success: true,
                                data: data,
                                message: "valid"
                            })
                            console.log("data is here",data)
                        }
                        else {
                            res.json({
                                success: false,
                                message: "user not found"
                            })
                        }
                    })
            })
            .catch((err) => {
                res.json({
                    success: false,
                    message: "error occured"
                })
                console.log("error",err)
            })
    }
}