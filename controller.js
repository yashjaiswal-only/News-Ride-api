
const router=require("express").Router();
const axios=require('axios')
require('dotenv').config()
const BASE_URL=process.env.NEWS_API
router.get("/",async(req,res)=>{
    try{
        var q="";
        const arr=Object.entries(req.query);
        for(var i=0;i<arr.length;i++){
            q+=arr[i][0]+"="+arr[i][1]+"&";
        }
        let url=BASE_URL+q.slice(0,-1);
        const news_get =await axios.get(url)
        res.status(200).json(news_get.data)
    }   
    catch(err){
        console.log(err)
    }
})
module.exports=router;