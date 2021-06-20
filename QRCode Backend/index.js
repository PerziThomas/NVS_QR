import express from 'express';
import { connectDB } from './dal/db-connector.js';
import { EintragRouter } from './eintrag-router.js';
import cors from 'cors';

const app = express();
let { json } = express;

const main = async () => {
    await connectDB("mongodb://localhost:27017/QR_Codes", 10000, true);
    app.use(json());
    app.use(cors());
    app.use("/api/entry", EintragRouter);

    app.listen(1568, () => {
        console.log("started...");
    });
}

main();