const mongoose = require("mongoose");

module.exports = async () => {
    const mongoUri =
        "mongorestore --uri mongodb+srv://YashJadhav:<Yashj@2002>@cluster0.qaeyxpr.mongodb.net";

    try {
        const connect = await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
