const userModel = require('../model/userModel.js')

const create = async (req,res) => {
    try{
        const userdata = new userModel(req.body);
        if(!userdata) {
            return res.status(404).json({msg: "User data not found"});
        }

        const savedData = await userdata.save();
        res.status(200).json({savedData})

    
    }catch(err){
        res.status(500).json({error : err});
    }
}

const getAll = async (req,res ) => {
    try{
        const userdata = await userModel.find();
        if(!userdata){
         return res.status(404).json({msg : "User data not found"})
        }

        res.status(200).json({userdata});

    }catch(err){
        res.status(500).json({error : err});
    }
}

module.exports = {create, getAll}