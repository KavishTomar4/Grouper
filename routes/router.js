let express = require('express');
let router = express.Router();
let upload = require('../multer');
let cloudinary = require('cloudinary');
require('../cloudinary')
router.get('/register' , (req , res)=>{

  res.render('register');



});

router.get('/login' , (req , res)=>{
 res.render('login');
});


router.post('/register' ,upload.single('image'), async(req , res)=>{

  let files = await cloudinary.v2.uploader.upload(req.file.path);

  res.send(files)


})


module.exports = router;