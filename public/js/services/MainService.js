angular.module('MainService', []).factory('Main', function($http) {
	return {
		get : function(itemID) {
			return $http.jsonp('http://eu.battle.net/api/wow/item/' + itemID + '?jsonp=JSON_CALLBACK');
		}
	}
});
