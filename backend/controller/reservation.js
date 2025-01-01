import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js"; 

export const sendReservation = async(req,res,next) => {
    const{firstName, lastName, email, date, time, phone} = req.body;
if( !firstName|| !lastName|| !email|| !phone|| !date|| !time){
    return next(new ErrorHandler("please fill full form",400));
}
try {
    await Reservation.create({firstName, lastname, email,  date, time, phone });
    res.status(201).json({
        success: true,
        message: "Reservation sent successfully"
    });
} catch (error) {
    if(error.name === 'validationErroor'){
        const validationErrors = Object.values(error.errors).map(err => err.message);
        return next(new ErrorHandler(validationErrors.join(', '), 400));
}
return next(error);
}
};