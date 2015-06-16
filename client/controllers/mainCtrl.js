/* Main Controller */		


(function() {

    'use strict';

    
		angular.module('APP')

		.controller('mainCtrl' , ['$scope', 'dataService', function($scope,dataService){

			//using the data service to return a promise from the server
			dataService.get()
				.success(function(data) {
					//updates the template using two way binding with $scope 
					$scope.data = data;
					console.log(data);
				})
				.error(function(error){
					console.log(error);
				});

			
		}]);
})();

