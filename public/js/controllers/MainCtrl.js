angular.module('MainCtrl', []).controller('MainController', function($scope, Main) {

	$scope.tagline = 'Here be stuff';

	$scope.search = function(itemID) {
		if (itemID) {
			Main.get(itemID)
			.success( function(data) {
        		$scope.result = data;
    		})
		} else {
			$scope.result = {"name": "You didn't give me anything. Why?"};
		};
	};

	$scope.clearSearch = function() {
		$scope.result = null;
		$scope.itemID = null;
	}

});
