/* Add Controller */		


(function() {

	'use strict';

	angular.module('APP')

		.controller('addCtrl' , addCtrl);

		addCtrl.$inject = ['$scope', 'dataService'];

		function addCtrl($scope, dataService){
			var vm = this;

			vm.artistName = '';
			vm.songTitle = '';
			vm.rating = '';

			vm.addSong = function(){

				var newsong = {
					artist: vm.artistName,
					title: vm.songTitle,
					rating: vm.rating
				}

				dataService.post(newsong);

				//empty out input values	
				vm.artistName = '';
				vm.songTitle = '';
				vm.rating = '';
			}

	
		}		

		
})();