var express = require("express");
var mongoDB = require("mongodb");
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

const dataFile = process.argv[2];
const collectionName = process.argv[3];

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';

(async () => {
    const client = new MongoClient(MONGODB_URI, {
        useNewUrlParser: true,
    });

    try {
        await client.connect();
        const db = client.db('bookings');
        const collection = db.collection(collectionName);

        const start = Date.now();
        fs.createReadStream(dataFile)
            .pipe(csv())
            .on('data', async (data) => {

                if (data.id) {
                    data._id = data.id;
                    delete data.id;
                }

                await collection.insertOne(data);
            })
            .on('end', () => {
                console.log(`done. took ${Date.now() - start} ms` );
                client.close();
            });
    } catch (err) {
        console.log(err);
    } 
})();
// router.post("/RegisterForm", function(req, res) {
//   const {userName,nickName,password,email}=req.body;
//   users.insert({ userName, nickName,password, email}, function(err, doc) {
//     console.log("Inserted", doc.userName,doc.nickName,doc.password,doc.email,"with",doc.nickName);
//   });
//   res.send({ registerd: true });
// });
// router.get("/getUsers", function(req, res) {
//   users.find({}, function(err, docs) {
//     res.send(docs);
//   });
// });
// router.delete("/deleteUser", function(req, res) {
//   const { user } = req.body;
//   users.remove({ user: user }, function(err, numDeleted) {
//     console.log("Deleted", numDeleted, "user(s)");
//   });
//   res.send({ user: true });
// });


module.exports = router;

