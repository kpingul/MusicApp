/* Data Service */

(function() {
	

	'use strict';

	angular.module('APP')

		.factory('dataService', dataService);

		dataService.$inect = ['$http'];

		function dataService($http){
			
			var service = {};

			service.get = function(){

				return $http.get('/api/playlist');

			}

			service.post = function(song){

				return $http.post('/api/playlist', song)
								.success(function (data) {
									return data;
								})
								.error(function (error) {
									console.log(error);
								});
			}

			service.delete = function(id){

				return $http.delete('/api/playlist/' + id)
								.success(function (data) {
									return data;
								})
								.error(function (error) {
									console.log(error);
								});
			}

			service.update = function(id, updatedSong){
				return $http.put('api/playlist/' + id, updatedSong)
								.success(function (data) {
									return data;
								})
								.error(function (error) {
									console.log(error);
								});		
			}

			return service;



		}


	
	
})();