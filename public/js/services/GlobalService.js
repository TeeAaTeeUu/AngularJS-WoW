angular.module('GlobalService', []).factory('Global', function($http) {
	return {
		getChar : function(host, realm, name) {
			return $http.jsonp('http://' + host + '.battle.net/api/wow/character/' + realm + '/' + name + '?jsonp=JSON_CALLBACK');
		}
	}
});
