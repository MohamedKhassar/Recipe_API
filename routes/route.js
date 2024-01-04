const express=require("express")
const { getAll, postData } = require("../controllers/RecipesController")
const router=express.Router()


router.get("/",getAll)
router.post("/",postData)

module.exports=router