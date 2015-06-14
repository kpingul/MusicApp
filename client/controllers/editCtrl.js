/* Edit Controller */		


(function() {

    'use strict';

	angular.module('APP')

		.controller('editCtrl' , ['$scope', '$stateParams', function($scope, $stateParams){

					$scope.artist = $stateParams.artist;
					$scope.song = $stateParams.title;
					$scope.rating = $stateParams.rating;
					console.log($scope.rating);

		}]);


})();