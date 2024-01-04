const express=require("express")
const { getAll, postData, deleteData, updateData, getOneData } = require("../controllers/RecipesController")
const router=express.Router()


router.get("/",getAll)
router.post("/",postData)
router.delete("/:id",deleteData)
router.put("/:id",updateData)
router.get("/:id",getOneData)

module.exports=router