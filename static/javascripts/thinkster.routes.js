(function(){
	'use strict';

	angular
		.module('thinkster.routes')
		.config(config); //.config used for defining routes dealing with csrf

	config.$inject = ['$routeProvider']

	function config($routeProvider) {
		$routeProvider.when('/register', {
			controller: 'RegisterController',
			controllerAs: 'vm',
			templateUrl: '/static/templates/authentication/register.html'
		}).otherwise('/')//if the route they want is not defined send them to home. 
	}

})();

