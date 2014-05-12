angular.module('MainCtrl', []).controller('MainController', function($scope, Main) {

	$scope.tagline = "Testing how AngularJS works with";
	$scope.taglineName = "WoW Community Web API";
	$scope.taglineUrl = "https://github.com/Blizzard/api-wow-docs";

	$scope.info = "Give your region, realm and character name, and I can show some cool info about your champion!";

	$scope.getRace = function() {
		Main.getRaces($scope.region.value)
				.success( function(data) {
        			var races = data.races;
        			for (var i = 0; i < races.length; i++) {
        				if (angular.equals(races[i].id, $scope.char.race)) {
        					$scope.char.raceName = races[i].name;
        					$scope.char.side = races[i].side;
        					break;
        				}
        			};
    			});
	}

	$scope.getClass = function() {
		Main.getClasses($scope.region.value)
				.success( function(data) {
        			var classes = data.classes;
        			for (var i = 0; i < classes.length; i++) {
        				if (angular.equals(classes[i].id, $scope.char.class)) {
        					$scope.char.className =classes[i].name;
        					$scope.char.powerType = classes[i].powerType;
        					break;
        				}
        			};
    			});
	}

});
