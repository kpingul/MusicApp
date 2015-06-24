/* Main Controller */		


(function() {

    'use strict';

    
		angular.module('APP')

		.controller('MainCtrl' , mainCtrl);

		mainCtrl.$inject = ['$scope', 'dataService'];

		function mainCtrl($scope,dataService) {

			var vm = this;


			//using the data service to return a promise from the server
			//****Must refactor because of exposing of getting data to server
			dataService.getData()
				.success(function (data) {
					vm.data = data;
				})	
				.error(function (error)	{			
					console.log(error);
				});
				

			
		}
})();

