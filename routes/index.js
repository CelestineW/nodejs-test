var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://planetime.firebaseio.com/");
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.redirect('/login');   // goes to router.get('/login',
});


/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('home', {});  // goes to home.hjs
});

/* POST request to user*/
router.post('/home', function(req, res, next) {
    var username = req.body.username;
//    var password = req.body.password;
    var time_amt = req.body.time_amt;
    var time_unit = req.body.time_unit;
/*
    myFirebaseRef.child("users/" + username).once("value", function(snapshot){
	var user = snapshot.val();
*/
    
    var time_mins = (time_amt*time_unit)/60;

    var newUser = myFirebaseRef.child("users/" + username);

    newUser.set({"time_frame": time_mins});

    res.render('home', {username: username},{time_frame: time_mins});
	
/*
	if (user == null) {
	    res.render('login', {invalid_login: true});
	}
*/
//	res.render('home', {username: username});
//    });
});

router.get('/create-timeline', function(req, res, next) {
    res.render('create-timeline', {});
});

router.get('/login-user', function(req, res, next) {
    res.render('login-user', {});
});

router.get('/login', function(req, res, next) {

    res.render('login',
	       {title: "why is tis here?",
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
