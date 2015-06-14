/* Main Controller */		


(function() {

    'use strict';

    
		angular.module('APP')

		.controller('mainCtrl' , ['$scope', 'dataService', function($scope,dataService){
			console.log(dataService);
			
		}]);
})();

