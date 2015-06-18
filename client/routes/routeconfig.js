/* Routing Config */

(function (){

		'use strict';

		angular.module('APP', ['ui.router'])
			
			.config(['$urlRouterProvider', '$stateProvider' , function($urlRouterProvider, $stateProvider){

					$urlRouterProvider.otherwise('/');


					$stateProvider

						.state('home', {

							url: '/',

							templateUrl: 'client/templates/home.html',

							controller: 'MainCtrl',

							controllerAs: 'vm'

						})

						.state('add', {

							url: '/add',

							templateUrl: 'client/templates/addMusic.html',

							controller: 'addCtrl',

							controllerAs: 'vm'

						})

						.state('edit', {

							/* Dynamic routing using $stateparams to catch values from data */
							url: '/edit/:id/:artist/:title/:rating', 

							templateUrl: 'client/templates/editMusic.html',

							controller: 'editCtrl',

							controllerAs: 'vm'
						});
					

				}]);
})();