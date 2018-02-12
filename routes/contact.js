var express = require('express');
var router = express.Router();
var nodemailer=require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send',function(req,res,next){
	console.log(req.body.name);
	var transpoter=nodemailer.createTransport({
		service:'Gmail',
		auth:{
			user:'your-mail-id',
			pass:'passowrd'
		}
	});
	
	var mailOptions={
		from:'sudhindranayak1996@outlook.com',
		to:'nayaksudhindra1996@gmail.com',
		subject:'Website Submission',
		text:'You have a new submission with the following details...Name:'+req.body.name+' Email:'+req.body.email+' Message:'+req.body.message,
		html:'<p>You have a new submission with the following details...</p><ul><li>Name:'+req.body.name+'</li><li>Email:'+req.body.email+'</li><li>Message:'+req.body.message+'</li></ul>'
	};
	transpoter.sendMail(mailOptions,function(err,info){
		if(err){
			console.log(err);
			res.redirect('/');
		}
		else{
			console.log('Message sent'+info.response);
			res.redirect('/');
		}
	})
});
module.exports = router;
