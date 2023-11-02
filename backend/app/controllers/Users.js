import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
 
export const getUser = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id','Name','Email']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}
 
export const Register = async(req, res) => {
    const { Name, Email, Password} = req.body;
    /*const isEmailExist = Users.findOne({
        where:{
            Email: Email
        }
            
    })*/
    //if(isEmailExist) return res.status(400).json({msg: "Email is exist"});\
    try {
        await Users.create({
            Name: Name,
            Email: Email,
            Password: Password
        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        console.log(error);
    }
}
 
export const Login = async(req, res) => {
    try {
        const user = await Users.findOne({
            where:{
                Email: req.body.Email,
                Password: req.body.Password
            }
        });
        if(!user) return res.status(400).json({msg: "Wrong Username or Password"});
        const Name = user.Name;
        const Email = user.Email;
        //return res.json({msg: "Working", Name});
        const accessToken = jwt.sign({Name, Email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '15s'
        });
        const refreshToken = jwt.sign({Name, Email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await Users.update({refresh_token: refreshToken},{
            where:{
                Email: Email
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
        console.log("regist succeed");
    } catch (error) {
        res.status(404).json({msg:"Email not found"});
        console.log("regist not succeed");
    }
}
 
export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const Email = user[0].Email;
    await Users.update({refresh_token: null},{
        where:{
            Email: Email
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}
