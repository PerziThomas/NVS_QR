import mongoose from "mongoose";
const { Schema } = mongoose;

const EintragSchema = new Schema({
    value1: {
        type: String,
        required: true
    },
    value2: {
        type: String,
        required: true
    },
});

let Eintrag = mongoose.model("eintrag", EintragSchema);

export default Eintrag;