const router = require("express").Router();
const contactRoutes = require("./contacts");
const userRoutes = require("./users");

// Contact API routes
router.use("/contacts", contactRoutes);
router.use("/users", userRoutes);

module.exports = router;
