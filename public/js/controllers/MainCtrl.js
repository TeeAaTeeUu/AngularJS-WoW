angular.module('MainCtrl', []).controller('MainController', function($http, $scope) {

	$scope.tagline = 'Here be stuff';

	$scope.search = function(itemID) {
		if (itemID) {
			$http.jsonp('http://eu.battle.net/api/wow/item/' + itemID + '?jsonp=JSON_CALLBACK').success( function(data, status, headers, config) {
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