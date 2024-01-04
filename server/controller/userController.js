const userModel = require('../model/userModel.js')

const create = async (req,res) => {
    try{
        const userdata = new userModel(req.body);
        if(!userdata) {
            return res.status(404).json({msg: "User data not found"});
        }

        const savedData = await userdata.save();
        res.status(200).json({msg :"User is created"})

    
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

const getOne = async (req,res) => {
    try{
        const id = req.params.id;
        const userExists = await userModel.findById(id);
        if(!userExists){
            return res.status(404).json({msg: "User was not found"})
        }

        res.status(200).json({userExists});
    }catch(err){
        res.status(500).json({error : err});
    }
}

const updateOne = async (req,res) => {
    try{
    const id = req.params.id
    const updateUser = await userModel.findByIdAndUpdate(id, req.body,{new:true})
    if(!updateUser){
        return res.status(404).json({msg: "User was not found"})
    }

    res.status(200).json({msg: "User updated"})

    }catch(err){
        res.status(500).json({error : err});
    }
}

const deleteOne = async (req,res) => {
    try{
    const id =  req.params.id
    const deleteUser = await userModel.findOneAndDelete({_id : id})
    if(!deleteUser){
        return res.status(404).json({msg : "User not found"})
    }

    res.status(200).json({msg: "User deleted"})

    }catch(err){
        res.status(500).json({error : err})
    }
    
}

module.exports = {create, getAll, getOne, updateOne, deleteOne}