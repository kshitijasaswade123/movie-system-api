
const Categry = require('../model/categry');

exports.getdata = async (req,res)=>{
    try {
        const data = await Categry.find();
        return res.json({
            errors:false,
            data:data
        })
    } catch (error) {
        return res.status(400).json({
            errors:true,
            message:error.message
        })
    }
}

exports.postdata = async (req,res)=>{
    try {
        const data = await Categry.create(req.body);
        return res.json({
            errors:false,
            data:data
        })
    } catch (error) {
        return res.status(400).json({
            errors:true,
            message:error.message
        })
    }
}