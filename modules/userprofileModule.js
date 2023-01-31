const { ObjectId } = require('mongodb');
const mongo = require('../connect');

module.exports.createUserprofile = async (req,res,next) => {
    try{
        const insertedResponse = await mongo.selectedDb.collection("userprofile").insertOne(req.body);
        res.send(insertedResponse);
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.updateUserprofile = async (req,res,next) => {
    try{
        const updatedData = await mongo.selectedDb.collection("userprofile")
                        .findOneAndUpdate({_id:ObjectId(req.params.userprofileId)}, 
                                          {$set: {...req.body}}, 
                                          {returnOriginal : true});
        res.send(updatedData);
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.getUserprofile = async (req,res,next) => {
   try{
       const productData = await mongo.selectedDb.collection("userprofile").find().toArray();
       res.send(productData);
   } catch(err) {
    console.error(err);
    res.status(500).send(err);
   }
}

module.exports.deleteUserprofile = async (req,res,next) => {
    try{
        const deletedData = await mongo.selectedDb.collection("userprofile").remove({_id: ObjectId(req.params.userprofileId)});
        res.send(deletedData);
    }catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}