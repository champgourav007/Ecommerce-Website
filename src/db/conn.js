const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Harsh:Hello123@cluster0.mrvbv0g.mongodb.net/?retryWrites=true&w=majority", {
    useUnifiedTopology:true,
    useNewUrlParser:true
    //useCreateIndex:true
}).then(() => {
    console.log(`connection successfull`);
}).catch((e) => {
    console.log(`not connect`);
})