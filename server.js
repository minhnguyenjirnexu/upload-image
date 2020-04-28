// call all the required packages
const express = require('express')
const bodyParser= require('body-parser')
const multer = require('multer');
const cors = require('cors');
const districts = require('./districts.json');
const provinces = require('./provinces.json');
const wards = require('./wards.json');
const banks = require('./banks.json');
var http = require('http');
const fs = require('fs');
var https = require('https');
const axios = require('axios');
var privateKey  = fs.readFileSync('./selfsigned.key', 'utf8');
var certificate = fs.readFileSync('./selfsigned.crt', 'utf8');
var xstate = require('xstate');

var machines = {};
var options = {
  key: privateKey,
  cert: certificate
};
//CREATE EXPRESS APP
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('uploads'));


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
  return res.json({
    success: true,
    isValidOtp: true
  })
})

//ROUTES WILL GO HERE
app.get('/', function(req, res) {
    res.json({ message: 'WELCOME' });   
});

app.get('/provinces/:id/districts', function(req, res) {
  const params = req.params;
  const {id} = params;

  return res.json(districts[id.toString()]);
});

app.get('/provinces', function(req, res) {
  return res.json(provinces);
})

app.get('/bank-provinces', function(req, res) {
  const result = [];
  const map = new Map();

  for(const bank of banks) {
    if(!map.has(bank.ProvinceId)) {
      map.set(bank.ProvinceId, true);
      result.push({
        "jnx_key": bank.ProvinceId,
        "jnx_value": bank.ProvinceName
      })
    }
  }

  return res.json(result);
})

app.get('/provinces/:id/banks', function(req, res) {
  const params = req.params;
  const {id} = params;

  const result = [];
  const map = new Map();
  const _banks = banks.filter(bank => {
    return bank.ProvinceId === id;
  });
  for(const bank of _banks) {
    if(!map.has(bank.BankId)) {
      map.set(bank.BankId, true);
      result.push({
        "jnx_key": bank.BankId,
        "jnx_value": bank.BankName,
      })
    }
  }
  return res.json(result);
})

app.get('/provinces/:id/:bankId/branches', function(req, res) {
  const params = req.params;
  const {id, bankId} = params;
  return res.json(banks.filter(bank => {
    return bank.ProvinceId === id && bank.BankId === bankId;
  }).map(bank => {
    return {
      "jnx_key": bank.BankBranchId,
      "jnx_value": bank.BankBranchName,
    };
  }));
})

app.get('/districts/:id/wards', function(req, res) {
  const params = req.params;
  const {id} = params;
  return res.json(wards[id.toString()]);
})

app.post('/id/ocr', function(req, res) {
  return res.json({
    "errorCode": 0,
    "errorMessage": "",
    "data": [
      {
        "id": "079083006220",
        "id_prob": "95.81",
        "name": "NGUYỄN THÁI DUY",
        "name_prob": "97.60",
        "dob": "05/25/1983",
        "dob_prob": "94.97",
        "sex": "NAM",
        "sex_prob": "94.75",
        "nationality": "VIỆT NAM",
        "nationality_prob": "97.58",
        "type_new": "cccd_12_front",
        "home": "TP HỒ CHÍ MINH",
        "home_prob": "99.89",
        "doe": "05/25/2023",
        "doe_prob": "94.98",
        "address": "414/5 DƯƠNG BÁ TRẠC, PHƯỜNG 1, QUẬN 8, TP HỒ CHÍ MINH",
        "address_prob": "77.32",
        "address_entities": {
            "province": "HỒ CHÍ MINH",
            "provinceId": "79",
            "district": "QUẬN 8",
            "districtId": "776",
            "ward": "PHƯỜNG 1",
            "wardId": "27394",
            "street": "414/5 DƯƠNG BÁ TRẠC"
        },
        "type": "new",
        "ethnicity": "N/A",
        "ethnicity_prob": "N/A",
        "religion": "N/A",
        "religion_prob": "N/A",
        "features": "SẸO CONG 3CM C 2CM TRÊN SAU ĐẦU MÀY PHẢI",
        "features_prob": "71.38",
        "issue_date": "03/15/2017",
        "issue_date_prob": "97.45",
        "issue_loc": "CỤC TRƯỞNG CỤC CẢNH SÁT ĐKQL CƯ TRÚ VÀ DLQG VỀ DÂN CƯ",
        "issue_loc_prob": "44.51"
      }
    ]
  })
})

app.post('/dl/ocr', function(req, res) {
  return res.json({
    "errorCode": 0,
    "errorMessage": "",
    "data": [
      {
        "id": "790165188861",
        "id_prob": "95.30",
        "name": "ĐẬU QUANG NAM",
        "name_prob": "97.99",
        "dob": "23/03/1988",
        "dob_prob": "96.23",
        "nation": "VIỆT NAM",
        "nation_prob": "96.13",
        "address": "TỔ 21 P HÒA KHÁNH NAM Q LIÊN CHIỄU TP ĐÀ NẴNG",
        "address_prob": "83.54",
        "place_issue": "TP HỒ CHÍ MINH",
        "place_issue_prob": "95.80",
        "date": "22/09/2016",
        "date_prob": "99.50",
        "class": "A1",
        "class_prob": "97.99",
        "doe": "KHÔNG THỜI HẠN",
        "doe_prob": "97.44"
      }
    ]
  })
})

app.get('/webhook', (req, res) => {
  console.log('get webhook', req.query);
  const {query} = req;
  const event = query.event;
  if(event && event !== '') {
    if (event === 'sendmsg') {
      // User try to send message to bot
      // Check on machines is include this ? 
      const fromuid = query.fromuid;
      if (fromuid && fromuid !== '') {
        // Check on machines[fromuid]
        const keys = Object.keys(machines)
        let machine;
        if(!(keys && keys.length && keys.indexOf(fromuid) > -1)) {
          // Already have  the machine in our server
          machines[fromuid] = createMachine()
        }
        machine = machines[fromuid]
        
        // The question is how to recover the machines when the server restart ???? 
      }
      // 
    }
  }
  // xử lí thêm gì đó....
  res.json({
    message: 'Welcome to JNX Webhook for Zalo'
  })
})

app.get('/callback', (req, res) => {
  console.log('get callback', req.query);
  // xử lí thêm gì đó....
  res.json({
    message: 'Welcome to JNX Callback for Zalo'
  })
})

app.post('/webhook', (req, res) => {
  console.log(req.body);
  // xử lí thêm gì đó....
  res.json({
    message: 'Welcome to JNX Webhook for Zalo'
  })
})


app.listen(3001, () => {
  console.log("server starting on port : " + 3001)
});