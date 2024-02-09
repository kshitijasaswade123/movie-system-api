const route = require("express").Router();
const { getdata, postdata } = require("../controller/movieController");

route.get("/", getdata);
route.post("/", postdata);

module.exports = route;
