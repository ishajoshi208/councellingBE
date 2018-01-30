module.exports={
    connectDb(mongoose){
        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb://councelling:councelling123@ds121716.mlab.com:21716/councelling",{useMongoClient:true},function(err,data){
            if(err){
                console.log("Error connecting database");
            }
            else{
                console.log("Connected to database");
            }
        });
    }
}