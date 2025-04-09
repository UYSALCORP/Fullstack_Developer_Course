"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const user = require("../controllers/user.controller");

// URL: /users ->
// User Controller
router.route("/users")
    .get(user.list)
    .post(user.create);

router.route("/users/:id")
    .get(user.read)
    .put(user.update) // MongoDB update edilen veriyi döndürmez.
    .patch(user.update)
    .delete(user.delete);

module.exports = router;