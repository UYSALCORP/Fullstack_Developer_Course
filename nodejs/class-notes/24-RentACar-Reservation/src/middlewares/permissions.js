"use strict";

const CustomError = require("../errors/customError");

/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
// Middleware: permissions
const message = "Your account is not active. Please contact support.";

function getUserInfo(){
  let user = req.user
  let isActive = req.user?.isActive
  let isAdmin = req.user?.isAdmin
  let isStaff = req.user?.isStaff
}

module.exports = {
  isLogin: (req, res, next) => {

    const {user, isActive} = getUserInfo(req)
    if(user && isActive) next()
      else{
        throw new CustomError(
          "AuthenticationError: You must be logged in to access this resource.", 403
        );
      }

    // if (req.user) {
    //   next();
    // } else {
    //   res.errorStatusCode = 403;
    //   throw new Error(
    //     "AuthenticationError: You must be logged in to access this resource.",
    //   );
    // }
  },
  isStaffOrisAdmin: (req, res, next) => {
    if (!(req.user?.isActive && (req.user.isAdmin || req.user.isStaff))) {
      res.errorStatusCode = 403;
      throw new Error(
        "AuthorizationError: You must be an Admin or Staff to access this resource.",
      );
    }
    next();
  },
  isAdmin: (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.errorStatusCode = 403;
      throw new Error(
        "AuthorizationError: You must be an Admin to access this resource.",
      );
    }
  },
};
