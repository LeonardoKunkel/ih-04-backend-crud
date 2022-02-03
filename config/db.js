const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        return console.log('Database online')
    } catch (error) {
        console.log(error);
        return process.exit(1) // Mata la instancia de NodeJS hacia ese cliente
    }
}

module.exports = connectDB;
