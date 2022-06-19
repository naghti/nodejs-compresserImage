const Router = require('express')
const fs = require("fs");
const gm = require('gm').subClass({imageMagick: true});
const router = new Router()
var im = require('imagemagick');
const resizer = require('node-image-resizer')
const sharp = require('sharp');


router.post('/file', async (req,res) => {
    try {
        // const timestamp = new Date()
        const file = req.files.file
        // console.log(timestamp)
        // console.log(file)
        //
        // await fs.appendFile("../files",file)
        //
        await file.mv('C:\\Users\\3vefa\\OneDrive\\Рабочий стол\\test\\files\\' + file.name);
        let originalImage = 'C:\\Users\\3vefa\\OneDrive\\Рабочий стол\\test\\files\\' + file.name;
        let outputImage = 'C:\\Users\\3vefa\\OneDrive\\Рабочий стол\\test\\files\\resize' + file.name;

        sharp(originalImage).resize({height:1280,width:960}).toFile(outputImage)
            .then(function(newFileInfo){
                console.log("Image resized");
            })
            .catch(function(err){
                console.log("Got Error", err);
        })
        // fs.unlink('C:\\Users\\3vefa\\OneDrive\\Рабочий стол\\test\\files\\' + file.name)
        // im.resize({
        //     srcPath: '../files/jBYFB9tr11E.jpg',
        //     dstPath: '../files/resize.jpg',
        //     width:   256
        // }, function(err, stdout, stderr){
        //     if (err) throw err;
        //     console.log('resized kittens.jpg to fit within 256x256px');
        // });
        res.status(200).json({message: 'all is good'})


// original image


    }catch (e) {
        console.log(111111111111111111111111111111111111111)
        console.log(e)
        res.send({message:'server error'})
    }
})

module.exports = router