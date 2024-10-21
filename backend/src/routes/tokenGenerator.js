import express from 'express'
const router=express.Router()

router.post("/generatetoken",(req,res)=>
{
return res.json({
"route":"generatetoken"
})
})


export default router;