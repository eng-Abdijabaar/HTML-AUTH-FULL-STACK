const mongoose = require('mongoose')

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('connected to mongoDB successfully');
        
    } catch (err) {
        console.log(`db connection failed: ${err}`);
        process.exit(1);
    }
}

module.exports = dbConnection