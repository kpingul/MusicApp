/* Data Service */

(function() {
	

	'use strict';

	angular.module('APP')

		.factory('dataService', dataService);

		dataService.$inject = ['$http'];

		function dataService($http){
			
			var service = {

				getAllSongs: getAllSongs,

				addSong: addSong,

				deleteSong: deleteSong,

				updateSong: updateSong

			};

			function getAllSongs (){

				return $http.get('/api/playlist');

			}

			function addSong (song){

				return $http.post('/api/playlist', song)
								.success(function (data) {
									return data;
								})
								.error(function (error) {
									console.log(error);
								});
			}

			function deleteSong(id){

				return $http.delete('/api/playlist/' + id)
								.success(function (data) {
									return data;
								})
								.error(function (error) {
									console.log(error);
								});
			}

			function updateSong(id, updatedSong){
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