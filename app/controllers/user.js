const user = require('../modals/user');
const belief = require('../modals/beliefs');
const event = require('../modals/events');
const generateToken = require('./../../config/auth/generateToken');

module.exports = {
    async createUser(req, res) {
        let newUser = await new user(req.body)
        console.log("new user created........",newUser)
        user.createUser(newUser, function (err, user) {
            if (err) {
                console.log(err)
            }
            else {
                console.log(user);
                newUser.save(function (err, data) {
                    if (err) {
                        res.json({
                            success: false,
                            message: "Error occured"
                        })
                    }
                    else {
                        res.json({
                            success: true,
                            data: data,
                            message: "valid"
                        });
                        console.log("dataaaa", data);
                    }
                })
            }
        })
    },
    async getUser(req, res) {
        user.findById({'_id':req.params.id})
        .populate('eventId')
        .populate('beliefId')
        .exec((err,data)=>{
            if(data){
                res.json({
                    success: true,
                    data: data,
                    message: 'valid data'
                })
            }
            else{
                res.json({
                    success: false,
                    message: "error occured"
                })
            }
        })
    }

}