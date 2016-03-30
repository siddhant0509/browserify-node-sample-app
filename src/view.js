const $ = require("jquery-browserify"),
	userClass = ".users";

const render = function(users){
	var userE = $(userClass);
	users.forEach(user => userE.append(`<li>${user.name}</li>`));
}


module.exports = {
	render
}


