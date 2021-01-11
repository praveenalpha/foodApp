const express = require("express");
const multer = require("multer");

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + ".jpg")
    }
  })
   

function fileFilter (req, file, cb) {   
    if(file.mimetype.includes('image')){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
}

const upload = multer({ storage: storage, fileFilter:fileFilter});



app.post('/photo',upload.single('photo'),(req,res)=>{
    console.log("body->>",req.body);
    console.log("file->>",req.file);
    console.log("files->>",req.files);
    
})

app.listen(3000,()=>{
    console.log("server started");
})