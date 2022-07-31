const Joi = require("joi");

exports.reqOtpValidator = new Joi.object({
  mobileNumber: Joi.string().length(10).required(),
});

exports.varifyOtpValidator = new Joi.object({
  mobileNumber: Joi.string().length(10).required(),
  otp: Joi.string().length(4).required(),
});

exports.onBoardingValidator = new Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
});
