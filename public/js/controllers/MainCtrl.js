angular.module('MainCtrl', []).controller('MainController', function($scope) {

	$scope.tagline = 'Here be stuff';

	$scope.search = function(itemID) {
		$scope.result = "here be the good stuff";
	};

});