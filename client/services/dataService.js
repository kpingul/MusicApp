/* Data Service */

(function() {
	

	'use strict';

	angular.module('APP')

		.factory('dataService', ['$http', function( $http ){

			var service = {};

			service.get = function(){

				return $http.get('/api/playlist');
			}


			return service;
		}]);






})();