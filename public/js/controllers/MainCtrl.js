angular.module('MainCtrl', []).controller('MainController', function($scope) {

	$scope.tagline = 'Here be stuff';

	$scope.search = function(itemID) {
		if (itemID) {
			$scope.result = "here be the good stuff";
		} else {
			$scope.result = "You didn't give me anything. Why?";
		};
		
	};

	$scope.clearSearch = function() {
		$scope.result = null;
		$scope.itemID = null;
	}

});