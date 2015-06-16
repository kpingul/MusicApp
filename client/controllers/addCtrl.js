/* Add Controller */		


(function() {

	'use strict';

	angular.module('APP')

		.controller('addCtrl' , ['$scope', 'dataService', function($scope, dataService){

			$scope.artistName = '';
			$scope.songTitle = '';
			$scope.rating = '';

			$scope.addSong = function(){

				var newsong = {
					artist: $scope.artistName,
					title: $scope.songTitle,
					rating: $scope.rating
				}

					dataService.post(newsong)
					.success(function(data){
						console.log(data);
					})
					.error(function(error){
						console.log(error);
					});

				//empty out input values	
				$scope.artistName = '';
				$scope.songTitle = '';
				$scope.rating = '';
			}

	
		}]);		

		
})();