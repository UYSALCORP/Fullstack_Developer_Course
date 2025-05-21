"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require("express").Router();

const User = require("../../controllers/view/userController");

// ------------------------------------------
// User
// ------------------------------------------

// Login and logout routes
// Handle login (POST for form submission)
router.route("/login").post(User.login).get(User.login);
// Handle logout (POST since it involves action)
router.post("/logout", User.logout);

// User management routes
// Get the list of users
router.get("/", User.list);
// Create a new user
router.route("/register").post(User.register).get(User.register);
// Get a specific user by ID
router.get("/:id", User.read);
// Update a specific user by ID
router.put("/:id/update", User.update);
router.patch("/:id/update", User.update);
// Delete a specific user by ID
router.delete("/:id/delete", User.delete);

module.exports = router;
