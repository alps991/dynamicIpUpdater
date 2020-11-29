const mongoose = require('mongoose');

const connUrl = "mongodb+srv://adonmez:Dualfuel1@cluster0.2fh2v.mongodb.net/dynamicIpService?retryWrites=true&w=majority";
//const connUrl = process.env.MONGODB_URL;
mongoose.connect(connUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
});