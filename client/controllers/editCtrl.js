/* Edit Controller */		


(function() {

    'use strict';

	angular.module('APP')

		.controller('editCtrl', editCtrl);
		
		editCtrl.$inject = ['$scope', '$stateParams', 'dataService'];

		function editCtrl($scope, $stateParams, dataService) {

			var vm = this;
			//updates the edit Music template with the current values that was previously clicked on
			//in the home template using state params to receive the data
			vm.id = $stateParams.id;
			vm.artist = $stateParams.artist;
			vm.song = $stateParams.title;
			vm.rating = $stateParams.rating;
			
			vm.deleteSong = function(){

				dataService.delete(vm.id);


				vm.artist = '';
				vm.song = '';
				vm.rating = '';

			}	

			vm.updateSong = function(artist, title, rating){

				var updatedSong = {

					artist: artist,

					title: title,

					rating: rating

				}


				dataService.update(vm.id, updatedSong);
			}


					


		}


})();