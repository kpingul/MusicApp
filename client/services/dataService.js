/* Data Service */

(function() {
	

	'use strict';

	angular.module('APP')

		.factory('dataService', dataService);

		dataService.$inect = ['$http'];

		function dataService($http){
			
			//refactor to create service object on the top
			//using function declarations hoisting


			var service = {

				getData: getData,

				postData: postData,

				deleteData: deleteData,

				updateData: updateData
			};

			function getData(){

				return $http.get('/api/playlist');

			}

			function postData(song){

				return $http.post('/api/playlist', song)
								.success(function (data) {
									return data;
								})
								.error(function (error) {
									console.log(error);
								});
			}

			function deleteData(id){

				return $http.delete('/api/playlist/' + id)
								.success(function (data) {
									return data;
								})
								.error(function (error) {
									console.log(error);
								});
			}

			function updateData(id, updatedSong){
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