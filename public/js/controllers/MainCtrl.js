angular.module('MainCtrl', []).controller('MainController', function($scope, Main) {

	$scope.tagline = 'Here be stuff';

	$scope.getRace = function(raceID) {
		Main.getRaces()
				.success( function(data) {
        			var races = data.races;
        			for (var i = 0; i < races.length; i++) {
        				if (angular.equals(races[i].id, raceID)) {
        					$scope.char.raceName = races[i].name;
        					$scope.char.side = races[i].side;
        					break;
        				}
        			};
    			});
	}

	$scope.getClass = function(classID) {
		Main.getClasses()
				.success( function(data) {
        			var classes = data.classes;
        			for (var i = 0; i < classes.length; i++) {
        				if (angular.equals(classes[i].id, classID)) {
        					$scope.char.className =classes[i].name;
        					$scope.char.powerType = classes[i].powerType;
        					break;
        				}
        			};
    			});
	}

});
