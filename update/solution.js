var mongo = require('mongodb').MongoClient

var databaseName = process.argv[2]
var url = 'mongodb://localhost:27017/' + databaseName

mongo.connect(url, function(err, db) {
    if (err) throw err
    var users = db.collection('users')
    users.update(
        { username: "tinatime" },
        { $set:
            {
                age: 40
            }
        }
    )
    db.close()
})