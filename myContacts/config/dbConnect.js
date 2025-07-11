const mongoose = require('mongoose');
require('dotenv').config();

// 비동기 처리
const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_CONNECT);
        console.log('DB connected');
    } catch (err) {
        console.log(err);
    }
};

module.exports = dbConnect;
