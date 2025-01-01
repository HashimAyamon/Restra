import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        require: true,
        minLength:[3,"FIRST NAME MUST CONTAIN 3 CHARACTERS"],
        maxLength:[25,"FIRST NAME CAN NOT BE MORE THAN 25 CHARACTERS"],
    },
    lastName: { 
        type: String,
        require: true,
        minLength:[3,"LAST NAME MUST CONTAIN 3 CHARACTERS"],
        maxLength:[25,"LAST NAME CAN NOT BE MORE THAN 25 CHARACTERS"],
    },
    email: { 
        type: String,
        require: true,
        validator: [validator.isEmail, "valid Email Is Required"],
    },
    phone: { 
        type: String,
        require: true,
        minLength:[11,"It Must Contains 11 numbers "],
        maxLength:[11,"It Must Contains 11 numbers"],
    },
    time: { 
        type: String,
        require: true,
    },
    date: { 
        type: String,
        require: true,
    },
});

export const Reservation = mongoose.model("Reservation",reservationSchema);