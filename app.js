/* Angular Application */

var APP = angular.module('APP', ['ui.router']);



APP.config(['$urlRouterProvider', '$stateProvider' , function($urlRouterProvider, $stateProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',

			templateUrl: 'client/templates/home.html',

			controller: function($scope) {

				$scope.data = [
					{
						id: '0',
						artist: 'Jay-z',
						title: 'December 4th',
						rating: 5

					},
					{
						id: '1',
						artist: 'Kygo',
						title: 'I see fire',
						rating: 4

					},
					{
						id: '2',
						artist: 'Chris Brown',
						title: 'War for you',
						rating: 3

					},
				]

			






			}
		})
		.state('add', {
			url: '/add',

			templateUrl: 'client/templates/addMusic.html',

			controller: function($scope) {
				
			}
		})
		.state('edit', {
			url: '/edit/:id/:artist/:title/:rating', 

			templateUrl: 'client/templates/editMusic.html',

			controller: function($scope, $stateParams) {

				$scope.artist = $stateParams.artist;
				$scope.song = $stateParams.title;
				$scope.rating = $stateParams.rating;
				console.log($scope.rating);
			}
		});
	

}]);






