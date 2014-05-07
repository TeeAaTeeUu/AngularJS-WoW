angular.module('MainCtrl', []).controller('MainController', function($http, $scope) {

	$scope.tagline = 'Here be stuff';

	$scope.search = function(itemID) {
		if (itemID) {
			$http.get('http://ng-project-backend.herokuapp.com/api/blogs.json').success( function(data, status, headers, config) {
        console.log(data)
        $scope.result = data;
    });
		} else {
			$scope.result = {"name": "You didn't give me anything. Why?"};
		};
		
	};

	$scope.clearSearch = function() {
		$scope.result = null;
		$scope.itemID = null;
	}

});