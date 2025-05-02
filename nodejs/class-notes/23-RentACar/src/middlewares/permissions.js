"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
// Middleware: permissions
const message = "Your account is not active. Please contact support.";

module.exports = {
  isLogin: (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.errorStatusCode = 403;
      throw new Error(
        "AuthenticationError: You must be logged in to access this resource.",
      );
    }
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
