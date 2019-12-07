var express = require('express');
var router = express.Router();
var path = require('path');

var nodemailer = require('nodemailer');

const sql = require('../utils/sql');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log('sent back a static file');
  res.sendFile((path.join(__dirname, "../views/index.html")));
});

router.get('/about', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log('sent back a static file');
  res.sendFile((path.join(__dirname, "../views/about.html")));
});

router.get('/projects', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log('sent back a static file');
  res.sendFile((path.join(__dirname, "../views/projects.html")));
});

router.get('/contact', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log('sent back a static file');
  res.sendFile((path.join(__dirname, "../views/contact.html")));
});

router.get('/svgdata/:target', (req, res) => {
  //we set up query here
  let query = `SELECT * FROM tbl_everything WHERE id="${req.params.target}"`;

  sql.query(query, (err, result)  => { //something broke!
    if (err) { console.log(err); }

    console.log(result); //the database row

    res.json(result[0]); //send that row back to the calling function
  })
})

router.post('/throw', (req,res) => {
  const output = `
  <h3>A client just viewed your website</h3>
  <h4>You can contact them back at</h4>
  <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
      <li>Message: ${req.body.message}</li>
  </ul>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'nityabuch04@gmail.com',
          pass: '********'
      }
  });

  let mailOptions = {
      from: '"Portfolio website" <connect@nityabuch04@gmail.com>',
      to: "nityabuch04@gmail.com",
      subject: "Website Visitor Feedback",
      html: output 
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error,info) => {
      if(error){
          console.log(error);
      }
      //Else do something to show successful sent;
      res.sendFile((path.join(__dirname, "../views/contact.html")));
  });
});

module.exports = router;
