const mongoose = require("mongoose")

const connectdb = async () => {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err) => {
    if (err) throw err
    console.log("MongoDB1 Connected");
})}

module.exports = connectdb