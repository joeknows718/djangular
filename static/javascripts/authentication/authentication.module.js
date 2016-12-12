(function(){
	'use strict';

	angular
		.module('thinkster.authentication', [
			'thinkster.authentication.controllers',
			'thinkster.authentication.services'
			]);

	angular
		.module('thinkster.authentication.controllers', []);

	angular
		.module('thinkster.authentication.services', ['ngCookies']);
		// ngCookies is needed to save the user cookie on registeration


})();