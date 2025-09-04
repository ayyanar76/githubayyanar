const express = require("express");
const {upload}=require("./upload")
const path = require("path")
const foldername = path.join(__dirname,"upload");
const app = express();
app.use(express(foldername))
//const upload = multer({ dest: "upload" });



app.get("/", (req, res) => {
  res.send("API is Working");
});
app.post("/upload/file",upload.single("image"),(req,res)=>{
  return res.json({message :"File Uploaded",data : req.file})
})
app.post("/upload/files",upload.array("images"),(req,res)=>{
  return res.json({message :"File Uploaded",data : req.files})
})


app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
