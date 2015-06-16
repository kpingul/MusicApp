/* Edit Controller */		


(function() {

    'use strict';

	angular.module('APP')

		.controller('editCtrl' , ['$scope', '$stateParams', 'dataService', function($scope, $stateParams, dataService){
			
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


					


		}]);


})();