const multer = require('multer');
const mimeTypes = require('mime-types');

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function(req,file,cb){
        cb("",Date.now()+"."+mimeTypes.extension(file.mimetype));
    }
});

const upload = multer({storage});

module.exports = upload;