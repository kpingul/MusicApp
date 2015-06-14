/* Angular Application */

var APP = angular.module('APP', ['ui.router']);



APP.config(['$urlRouterProvider', '$stateProvider' , function($urlRouterProvider, $stateProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',

			templateUrl: 'client/templates/home.html',

			controller: function($scope) {
				
			}
		})
		.state('add', {
			url: '/add',

			templateUrl: 'client/templates/addMusic.html',

			controller: function($scope) {
				
			}
		});
	

}]);






