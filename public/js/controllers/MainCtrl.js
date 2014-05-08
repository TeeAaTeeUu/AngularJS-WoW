angular.module('MainCtrl', []).controller('MainController', function($scope, Main) {

	$scope.tagline = 'Here be stuff';

	$scope.search = function(name) {
		if (name) {
			Main.getChar("eu", "Mazrigos", name)
				.success( function(data) {
        			$scope.char = data;
    			});
    		Main.getRaces()
    			.success (function(data) {
    				$scope.races = data;
    			})
		} else {
			$scope.char = {"name": "You didn't give me anything. Why?"};
		};
	};

	$scope.clearSearch = function() {
		$scope.char = null;
		$scope.name = null;
	}

});
