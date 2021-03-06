const express = require("express");
const queryDB = require("../api/apiqueries");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Election Data Backend"
  });
});

router.get("/denmark", async function (req, res, next) {
  req.data = "Denmark"
  queryDB.getDataCollection(req, res, next);
});

router.get("/germany", async function (req, res, next) {
  req.data = "Germany"
  queryDB.getDataCollection(req, res, next);
});

router.get("/france", async function (req, res, next) {
  req.data = "France"
  queryDB.getDataCollection(req, res, next);
});

router.get("/uk", async function (req, res, next) {
  req.data = "uk"
  queryDB.getDataCollection(req, res, next);
});

router.get("/hungary", async function (req, res, next) {
  req.data = "Hungary"
  queryDB.getDataCollection(req, res, next);
});

router.get("/slovakia", async function (req, res, next) {
  req.data = "Slovakia"
  queryDB.getDataCollection(req, res, next);
});

router.get("/australia", async function (req, res, next) {
  req.data = "Australia"
  queryDB.getDataCollection(req, res, next);
});

router.get("/india", async function (req, res, next) {
  req.data = "India"
  queryDB.getDataCollection(req, res, next);
});

router.get("/us", async function (req, res, next) {
  req.data = "us"
  queryDB.getDataCollection(req, res, next);
});

router.get("/georgia", async function (req, res, next) {
  req.data = "georgia"
  queryDB.getDataCollection(req, res, next);
});

router.get("/sweden", async function (req, res, next) {
  req.data = "sweden"
  queryDB.getDataCollection(req, res, next);
});

router.get("/norway", async function (req, res, next) {
  req.data = "norway"
  queryDB.getDataCollection(req, res, next);
});

router.get("/finland", async function (req, res, next) {
  req.data = "finland"
  queryDB.getDataCollection(req, res, next);
});

module.exports = router;
