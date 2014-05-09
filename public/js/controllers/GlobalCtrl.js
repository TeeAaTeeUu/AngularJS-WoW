angular.module('GlobalCtrl', []).controller('GlobalController', function($scope, Global) {

	$scope.search = function(name) {
		if (name) {
			Global.getChar("eu", "Mazrigos", name)
				.success( function(data) {
        			$scope.char = data;
        			$scope.char.thumbnail = 'http://eu.battle.net/static-render/eu/' + $scope.char.thumbnail;
        			$scope.error = null;

        			if(angular.equals($scope.char.gender, 0)) {
        				$scope.char.sex = "male";
        				$scope.char.sexHas = "his";
        			} else {
        				$scope.char.sex = "female";
        				$scope.char.sexHas = "her";
        			}
    			});
		} else {
			$scope.error = "You didn't give me anything. Why?";
		};
	};

	$scope.clearSearch = function() {
		$scope.char = null;
		$scope.name = null;
		$scope.error = null;
	}
});
