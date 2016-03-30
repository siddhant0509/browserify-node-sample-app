const model  = require("./model"),
	view = require("./view"),
	$ = require("jquery-browserify");

$(function(){
	var users = model.load();
	view.render(users);
})

