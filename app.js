/* Angular Application */

var APP = angular.module('APP', ['ui.router']);

/* Routing Config */

APP.config(['$urlRouterProvider', '$stateProvider' , function($urlRouterProvider, $stateProvider){

	$urlRouterProvider.otherwise('/');


	$stateProvider

		.state('home', {

			url: '/',

			templateUrl: 'client/templates/home.html',

			controller: 'mainCtrl'

		})

		.state('add', {

			url: '/add',

			templateUrl: 'client/templates/addMusic.html',

			controller: 'addCtrl'

		})

		.state('edit', {

			/* Dynamic routing using $stateparams to catch values from data */
			url: '/edit/:id/:artist/:title/:rating', 

			templateUrl: 'client/templates/editMusic.html',

			controller: 'editCtrl'
		});
	

}]);



