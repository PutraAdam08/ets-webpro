import Recipes from "../models/RecipeModel.js";
import Users from "../models/UserModel.js";
import path from "path";
import fs from "fs";
 
export const getRecipe = async(req, res)=>{
    try {
        const response = await Recipes.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getRecipeById = async(req, res)=>{
    try {
        const response = await Recipes.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const saveRecipes = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const Name = req.body.Name;
    const Ingridient = req.body.Ingridient;
    const Step = req.body.Step;
    const RecipeKind = req.body.RecipeKind;
    const UserEmail = req.body.UserEmail
    const file = req.files.file; 
    const fileSize = file.data.length;
    const ext = path.extname(file.Name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];
 
    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});
 
    file.mv(`./public/images/${fileName}`, async(er )=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Recipes.create({Name: Name, Ingridient: Ingridient, Step: Step, RecipeKind: RecipeKind, UserEmail: UserEmail, image: fileName, url: url});
            res.status(201).json({msg: "Recipes Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })
 
}
 
export const deleteRecipes = async(req, res)=>{
    const Recipes = await Recipes.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!Recipes) return res.status(404).json({msg: "No Data Found"});
 
    try {
        const filepath = `./public/images/${Recipes.image}`;
        fs.unlinkSync(filepath);
        await Recipes.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Recipes Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}