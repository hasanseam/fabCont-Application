// ExpressJS Setup
const express = require('express');
const Joi = require('@hapi/joi'); //for json validation
const app = express();
const https = require('https')
var bodyParser = require('body-parser');
// Constants

app.use(express.json()); //for parsing json request

//const _app_folder = 'fabcarUI/dist/fabcarUI'
//app.use(express.static('fabcarUI/dist/fabcarUI'));

const query = require('./serverFiles/queryAllServer.js');
const add = require('./serverFiles/addContServer.js');
//const invoke = require('./invokeServer.js');
//Fix the CORS Error — and How the Access-Control-Allow-Origin Header Works
app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
   next();
 });

 //Get /api/querySingle/:containerno ex /api/querySingle/cnr
 app.get('/api/querySingle/:cnr', function (req, res) {
   const result = query.queryFuncSingle(req.params.cnr);
   let containerData = [];
   result.then(data=>{
      containerData = data;
      res.send(containerData);
   });

});

// Get /api/query
app.get('/api/query', function (req, res) {
     const result = query.queryFunc();
     let containerData = [];
     result.then(data=>{
        containerData = data;
        res.send(containerData);
     });

});

//Post /api/add
app.post('/api/addContainer',(req,res)=>{
   const schema = Joi.object({
      cnr:Joi.string(),
      vgm:Joi.string(),
      type:Joi.string(),
      status:Joi.string(),
      target:Joi.string(),
      cargo:Joi.string(),
      location:Joi.string()
  });
  const {error} = schema.validate(req.body);
  if(error) {
   res.status(400).send(error.details[0].message);
   return;
   }

   add.addContainerFunc(req.body.cnr,req.body.vgm,
                        req.body.type,req.body.status,
                        req.body.target,req.body.cargo,
                        req.body.location);
   res.sendStatus(200)
})

// set Protcol type to https for run on Secproport Server
const protocolType = 'http';
const PORT = 8081;
let HOST = ''
if(protocolType === 'https')
{
   var fs = require('fs');
   var options = {
       key: fs.readFileSync('certificates/privkey1.pem'),
       cert: fs.readFileSync('certificates/fullchain1.pem'),
      };
   HOST = 'secproport-pki.informatik.uni-bremen.de';
   https.createServer(options, app).listen(PORT, HOST);
}
else { 
   var os = require("os");
   var hostname = os.hostname();
   HOST = hostname
   app.listen(PORT, HOST);
}
console.log(`Running on ${protocolType}://${HOST}:${PORT}`);
