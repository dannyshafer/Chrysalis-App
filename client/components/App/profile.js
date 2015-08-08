var EventEmitter = require('eventemitter3');
var objectAssign = require('object-assign');
var Reqwest = require('reqwest');
var $ = require('jquery');

!function(){
	App = {};
	var profile = App.profile = {};

	objectAssign(profile, EventEmitter.prototype);

	profile.update = function (url) {
		Reqwest({
		  url: url,
		  type: 'json',
		  method: 'get',
		  contentType: 'application/json',
		  headers: {'Authorization': sessionStorage.getItem('jwt')},
		  error: function(error) {
		    console.error(url, error['response']);
		    location = '/';
		  }
		}).then(function (response) {
			
		})
	}

	module.exports = App;
	
}();