var express = require("express");
var router = express.Router();
var Datastore = require("nedb");
var users = new Datastore({ filename: "./usersDb.db", autoload: true });
/* GET users listing. */
/* GET users listing. */
router.get("/", function(req, res) {
  res.send("respond with a resource");
});
router.post("/RegisterForm", function(req, res) {
  const {userName,nickName,password,email}=req.body;
  users.insert({ userName, nickName,password, email}, function(err, doc) {
    console.log("Inserted", doc.userName,doc.nickName,doc.password,doc.email,"with",doc.nickName);
  });
  res.send({ registerd: true });
});
router.get("/getUsers", function(req, res) {
  users.find({}, function(err, docs) {
    res.send(docs);
  });
});
router.delete("/deleteUser", function(req, res) {
  const { user } = req.body;
  users.remove({ user: user }, function(err, numDeleted) {
    console.log("Deleted", numDeleted, "user(s)");
  });
  res.send({ user: true });
});
module.exports = router;

