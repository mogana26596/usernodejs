const { ObjectId } = require('mongodb');
const mongo = require('../connect');

module.exports.createUser = async (req,res,next) => {
    try{
        const insertedResponse = await mongo.selectedDb.collection("user").insertOne(req.body);
        res.send(insertedResponse);
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.updateUser = async (req,res,next) => {
    try{
        const updatedData = await mongo.selectedDb.collection("user")
                        .findOneAndUpdate({_id:ObjectId(req.params.userId)}, 
                                          {$set: {...req.body}}, 
                                          {returnOriginal : true});
        res.send(updatedData);
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.getUser = async (req,res,next) => {
   try{
       const productData = await mongo.selectedDb.collection("user").find().toArray();
       res.send(productData);
   } catch(err) {
    console.error(err);
    res.status(500).send(err);
   }
}

module.exports.deleteUser = async (req,res,next) => {
    try{
        const deletedData = await mongo.selectedDb.collection("user").remove({_id: ObjectId(req.params.userId)});
        res.send(deletedData);
    }catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}