# MongoShell Commands 

### USING COLLECTION
use collection_name

### CREATING COLLECTION
db.createCollection('collection_name')

### DROP COLLECTION
db.collection_name.drop()

### DROP DATABASE
db.dropDatabase()

### INSERTING SINGLE DATA IN DOCUMENT
db.document_name.insertOne({object})

### INSERTING MULTIPLE DATA IN DOCUMENT
db.document_name.insertMany([{object1}, {object2}])

### FILTERING DOCUMENTS
db.document_name.find({property_name: value})

### SORTING DOCUMENTS
- db.document_name.sort({property_name: 1}) //sorts in ascending order <br>
- db.document_name.sort({property_name: -1}) //sorts in descending order

### OPERATORS & COMPLEX QUERIES
- **Using $gte, $lte, $or**: db.shop.find({$or: [{price: {$lte: 100}}, {price: {$gte: 100}}]})
- **Using $in, $nin**: db.shop.find({product: {$in: ["notebook","crayons"]})

### UPDATING DOCUMENTS
- **using $set**:  db.doc_name.updateOne({_id: object_id}, {$set: {key: value}})
- **using $inc**:  db.doc_name.updateOne({_id: object_id}, {$inc: {key: increment_val}})
- using $pull & $push:  db.doc_name.updateOne({_id: object_id}, {$pull: {key: value}}) //operates ony on arrays
