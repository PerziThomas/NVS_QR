import express from 'express';
import Eintrag from './model/eintrag-model.js';

const router = express.Router();
const fields = "value1 value2";

router.post("/", async (req, res, next) => {
    try {
        if (Object.keys(req.body).some(key => !fields.split(" ").includes(key))) {
            throw "Invalid fields";
        }

        await Eintrag.create(req.body);
        res.status(201).send();
    } catch (err) {
        res.status(400).send(err);
    }
});

export { router as EintragRouter };