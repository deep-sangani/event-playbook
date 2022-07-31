module.exports = class CustomError extends Error {
  constructor(status, message, extra) {
    super(message);
    this.message = message;
    this.status = status;
    this.extraMsg = extra;
  }
};
