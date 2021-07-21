
const express = require('express');
const router = express.Router();
const Resistencia = require('../models/resistencia');


//Multer es para subir archivos al servidor, en la carpeta uploads.
//mimetypes es para saber la extension del archivo que se va a subir.
const multer = require('multer');
const mimetypes = require('mime-types');
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function(req,file,cb){
        // cb('', file.originalname + '.' + mimetypes.extension(file.mimetype))
        cb('', file.originalname)
    }
});
const upload = multer({
    storage: storage
});
router.post('/files', upload.single('avatar') ,(req,res)=>{
    res.send('Respuesta desde post files')
});
//--------------------------


router.get('/', (req,res)=>{
    res.render('index.ejs');
});


router.post('/', async(req,res)=>{
    console.log('req body: ',req.body)
    let nuevo = req.body;
    try {
        await Resistencia.create(nuevo)
        // res.redirect('/')
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;