const express = require('express');
const paymentRouter = express.Router();
const {createPaymentSession} = require('../controller/paymentController');


paymentRouter.route("").post(createPaymentSession);


module.exports = paymentRouter;