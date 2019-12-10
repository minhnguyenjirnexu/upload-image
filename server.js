// call all the required packages
const express = require('express')
const bodyParser= require('body-parser')
const multer = require('multer');
var cors = require('cors');
//CREATE EXPRESS APP
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}))


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, new Date().getTime() + '_' + file.originalname.replace(/\s/gm, '_'))
    }
})
   
var upload = multer({ storage: storage })

app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file)
    
})

//Uploading multiple files
app.post('/uploadmultiple', upload.array('myFiles', 12), (req, res, next) => {
    const files = req.files
    if (!files) {
      const error = new Error('Please choose files')
      error.httpStatusCode = 400
      return next(error)
    }
   
      res.send(files)
    
})

app.post('/otp/request', function(req, res) {
  return res.json({
    success: true,
    otp: '0000'
  })
});

app.post('/otp/resend', function(req, res) {
  return res.json({
    success: true,
    otp: '0000'
  })
});

app.get('/otp/check/:otp', function(req, res) {
  const params = req.params;
  const {otp} = params;
  if(otp === '') {
    const error = new Error('Please input otp');
    error.httpStatusCode = 400;
    return next(error);
  }

  if(otp === '0000') {
    return res.json({
      success: true,
      isValidOtp: true
    })
  }

  return res.json({
    success: true,
    isValidOtp: false
  })
})

//ROUTES WILL GO HERE
app.get('/', function(req, res) {
    res.json({ message: 'WELCOME' });   
});
 
app.listen(3001, () => console.log('Server started on port 3000'));
