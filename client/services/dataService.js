/* Data Service */

(function() {
	

	'use strict';

	angular.module('APP')

		.factory('dataService', ['$http', function( $http ){

			var service = {};

			service.get = function(){

				return $http.get('/api/playlist');
			}

			service.post = function(song){

				return $http.post('/api/playlist', song);

			}

			service.delete = function(id){
				return $http.delete('/api/playlist/' + id);
			}

			service.update = function(id, updatedSong){
				return $http.put('api/playlist/' + id, updatedSong);
			}

			return service;

		}]);


})();