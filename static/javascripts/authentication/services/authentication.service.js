(function(){
	//creates immediatly invoked functionl namesspace around code. 
	'use strict'; //ensures our JS is properly typed.

	angular.module('thinkster.authentication.services')
	.factory('Authentication', Authentication);

	Authentication.$inject =  [ '$cookies', '$http'];

	function Authentication($cookies, $http){
		
		var Authentication = {
			register: register
		};

		return Authentication;

		function register(email, password, username){
			$http.post('/api/v1/accounts/', {
				username:username,
				email:email,
				password:password
			});
		}
	}
})();