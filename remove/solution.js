var mongo = require('mongodb').MongoClient

var databaseName = process.argv[2]
var collectionName = process.argv[3]
var idOfDocumentToDelete = process.argv[4]
var url = 'mongodb://localhost:27017/' + databaseName

mongo.connect(url, function(err, db) {
    if (err) throw err
    var collection = db.collection(collectionName)
    collection.remove({ 
        _id: idOfDocumentToDelete 
    })
    db.close()
})