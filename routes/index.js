var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://planetime.firebaseio.com/");
var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {

        myFirebaseRef.once("value", function(snapshot){
	var users = snapshot.val();
	console.log(users);
    });

  res.render('index', { title: 'Express' , hello: 'Hello World'});
});



router.post('/', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  var fname = req.body.first;
  var lname = req.body.last;
    
  var newUser = myFirebaseRef.child("users/" + username);

  newUser.set({"password": password, "first_name": fname, "last_name": lname});

  res.redirect('/dashboard?user=' + username);
 
//  res.render('index', { title: 'Expess' , hello: 'Hello World'});

});

router.get('/dashboard', function(req, res, next) {

    var user = req.query.user;

    myFirebaseRef.child("users/"+ user).once("value", function(snapshot){
	var currentUser = snapshot.val();
	
	res.render('dashboard',{title: "Express", firstname: currentUser.first_name});
    });

//  res.render('index', { title: 'Express' });
});










module.exports = router;
