var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Najlepsza kawa świata', zmienna:'Moja zmienna' });
});
// router.get('/ciasta/ciasto/:ciasto', function(req, res, next) {
//   res.render('index', { title: 'Ciasta', zmienna: req.params.ciasto });
// });
router.get('/oferty', function(req, res, next) {
  res.render('oferty', { title: 'Oferty specjalne'});
});
router.get('/expresy', function(req, res, next) {
  res.render('expresy', { title: 'Expresy'});
});
router.get('/uslugi', function(req, res, next) {
  res.render('uslugi', { title: 'Usługi'});
});
//route to get the contact form
router.get('/kontakt', function(req, res, next) {
  res.render('kontakt', { title: 'Kontakt'});
});
//route to send the form
router.post('/kontakt/send', function(req, res) {
  
  var transporter = nodeMailer.createTransport({

  service : 'Gmail',
  auth : 
  {
    user:'youruser@gmail.com',
    pass:'yourpassword'
  }

  });

  var mailOptions = 
  {
    from:'Peter Böthig <youremail@gmail.com>',
    to: 'youremail@gmail.com',
    subject:'A simple test',
    text:'this a a simple test from Name:'+ req.body.name+' Email:'+req.body.email+' Message:'+req.body.message,
    html:'<p><ul><li>this a a simple test from Name:'+ req.body.name+'</li><li> Email:'+req.body.email+'</li><li>Message:'+req.body.message+'</li></ul>',
  }

  transporter.sendMail(mailOptions, function (err, info)
  {
    if(err)
    {
      console.log(err);
      res.redirect('/');
    }else
    {
      console.log('Message send');
      res.redirect('/');
    }
  });

});


module.exports = router;
