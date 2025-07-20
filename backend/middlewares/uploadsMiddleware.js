const multer = require('multer')
const path = require('path')
const fs = require('fs')

const storage = multer.memoryStorage()

const fileFilter = function (req, file, cb) {
    if (file.mimetype == 'image/png' || file.mimetype == 'image/jpeg') {
        cb(null, true)
    } 
    
    else {
        req.invalidType = file.originalname
        cb(null, false)
    }
}



const uploads = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

module.exports = uploads