var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://planetime.firebaseio.com/");
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.redirect('/login');
});


/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('home', {});
});

/* POST request to login */
router.post('/home', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    
    myFirebaseRef.child("users/" + username).once("value", function(snapshot){
	var user = snapshot.val();
	
	if (user == null) {
	    res.render('login', {invalid_login: true});
	}
	res.render('home', {});
    });
});

router.get('/create-timeline', function(req, res, next) {
    res.render('create-timeline', {});
});

router.get('/login-user', function(req, res, next) {
    res.render('login-user', {});
});

router.get('/login', function(req, res, next) {
    res.render('login',
	       {title: "Home",
		invalid_login: true,
		names: ["Mike", "John", "Jane"],
		people: [{ firstname: "Michael", lastname: "Bishoff" },
			 { firstname: "Jane", lastname: "Doe" }]
	       });
});

router.get('/new-form', function(req, res, next) {
    res.render('new-form', {});
});

router.get('/new-timeline', function(req, res, next) {
    res.render('new-timeline', {});
});

router.get('/view-timeline', function(req, res, next) {
    res.render('view-timeline', {});
});










/* GET home page. */
/*
router.get('/', function(req, res, next) {
    myFirebaseRef.once("value", function(snapshot){
	var users = snapshot.val();
	console.log(users);
    });
  res.render('index', { title: 'Expess' , hello: 'Hello World'});
});



router.post('/', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  var fname = req.body.first;
  var lname = req.body.last;
    
  var newUser = myFirebaseRef.child("users/" + username);

  newUser.set({"password": password, "first_name": fname, "last_name": lname});

  res.redirect('/dashboard?user=' + username);
});

router.get('/dashboard', function(req, res, next) {

    var user = req.query.user;

    myFirebaseRef.child("users/"+ user).once("value", function(snapshot){
	var currentUser = snapshot.val();
	
	res.render('dashboard',{title: "Express", firstname: currentUser.first_name});
    });

//  res.render('index', { title: 'Express' });
});

*/








module.exports = router;
