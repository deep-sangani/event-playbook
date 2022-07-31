const CustomError = require("../helpers/Error.class");
const { JWT_SECRET } = require("../config/constant");
const { TokenExpiredError, JsonWebTokenError } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const { checkUserInDb } = require("../services/v1/authService");
exports.checkAccessToken = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw new CustomError(401, "Unauthorized", "Access token is missing");
    }
    let token = req.headers.authorization;
    if (token.startsWith("Bearer")) {
      token = token.split(" ")[1];
    }

    const decoded = await jwt.verify(token, JWT_SECRET);
    console.log(
      "🚀 ~ file: authTokenChecker.js ~ line 18 ~ exports.checkAccessToken= ~ decoded",
      decoded
    );
    const { id, mobileNumber } = decoded.data;
    req.user = { id, mobileNumber };

    const isUser = await checkUserInDb(id, mobileNumber);
    console.log(
      "🚀 ~ file: authTokenChecker.js ~ line 25 ~ exports.checkAccessToken= ~ isUser",
      isUser
    );

    if (!isUser) throw new CustomError(400, "unAuthorized user");
    next();
  } catch (error) {
    console.log(error);
    if (error instanceof TokenExpiredError) {
      next(new CustomError(401, "token is expired"));
    } else if (error instanceof JsonWebTokenError) {
      next(new CustomError(501, "invalid token"));
    } else {
      next(error);
    }
  }
};
