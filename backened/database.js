const mongoose=require('mongoose')
let url="mongodb://localhost:27017/inotebook"
const connecttomongoose=async () => {
    try{
        let URL=await mongoose.connect(url)
    console.log("connection established")
    }
    catch(e){
        console.log("failed");
        
    }
    
}
module.exports=connecttomongoose;