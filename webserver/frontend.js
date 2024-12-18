
const express = require("express");
const router = express.Router();

// Home page route.
router.get("/", function (req, res) {
    res.send("Frontend Homepage!");
});

// About page route.
router.get("/about", function (req, res) {
    res.send("Site created by Daryl S.");
});

module.exports = router;