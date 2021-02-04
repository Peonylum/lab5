var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	let newFriend =  {
		"name": request.query.name,
		"description": request.query.description,
		"imageURL": "http://lorempixel.com/400/400/people"
	}

	data.friends.push(newFriend);
	console.log(newFriend);

	response.render('index.handlebars', data);
 }