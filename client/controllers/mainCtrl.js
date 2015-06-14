/* Main Controller */		


(function() {

    'use strict';

    
		angular.module('APP')

		.controller('mainCtrl' , ['$scope', function($scope){

					/* Default Music Data */

						$scope.data = [
							{
								id: '0',
								artist: 'Jay-z',
								title: 'December 4th',
								rating: 5

							},
							{
								id: '1',
								artist: 'Kygo',
								title: 'I see fire',
								rating: 4

							},
							{
								id: '2',
								artist: 'Chris Brown',
								title: 'War for you',
								rating: 3

							},
						]




		}]);
})();

