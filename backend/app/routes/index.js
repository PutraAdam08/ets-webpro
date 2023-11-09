import express from "express";
import { getUser, Register, Login, Logout, updateUser, getUserByEmail} from "../controllers/Users.js";
import { getRecipe, getRecipeById, saveRecipes, } from "../controllers/Recipes.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/refreshToken.js";
 
const router = express.Router();
 
router.get('/users', verifyToken, getUser);
router.get('/users/:Email', getUserByEmail);
router.post('/users', Register);
router.patch('/users/updateUser/:Email', updateUser);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.get('/recipes', getRecipe);
router.get('/recipes/:Email', getRecipeById);
router.get('/recipes', saveRecipes);

 
export default router;