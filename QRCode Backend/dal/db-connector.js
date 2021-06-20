import mongoose from 'mongoose';
import Eintrag from '../model/eintrag-model.js';

const initAllModels = async () => {
    await Eintrag.init();
};

export const connectDB = async (
    connectionString,
    dbConnectTimeout,
    recreateDatabase
) => {
    let dbConn = await mongoose.createConnection(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: dbConnectTimeout,
    });

    if (recreateDatabase) {
        await dbConn.dropDatabase();
    }

    await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
        serverSelectionTimeoutMS: dbConnectTimeout,
    });

    if (recreateDatabase) {
        await initAllModels();
    }
};
