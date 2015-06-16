/* Edit Controller */		


(function() {

    'use strict';

	angular.module('APP')

		.controller('editCtrl' , ['$scope', '$stateParams', 'dataService', function($scope, $stateParams, dataService){
			
			//updates the edit Music template with the current values that was previously clicked on
			//in the home template using state params to receive the data
			$scope.id = $stateParams.id;
			$scope.artist = $stateParams.artist;
			$scope.song = $stateParams.title;
			$scope.rating = $stateParams.rating;
			
			$scope.deleteSong = function(){

				dataService.delete($scope.id)
					
					.success( function(data){

						console.log(data);

					})

					.error( function(error){

						console.log(error);

					});


				$scope.artist = '';
				$scope.song = '';
				$scope.rating = '';

			}	

			$scope.updateSong = function(artist, title, rating){

				var updatedSong = {

					artist: artist,

					title: title,

					rating: rating

				}


				dataService.update($scope.id, updatedSong)

					.success(function(data) {

						console.log(data);	

					})

					.error(function(error) {

						console.log(error);

					});
			}


					


		}]);


})();