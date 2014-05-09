angular.module('PetsService', []).factory('Pets', function($http) {
	return {
		getPets : function(host, realm, name) {
			return $http.jsonp('http://' + host + '.battle.net/api/wow/character/' + realm + '/' + name + '?fields=pets' + '&jsonp=JSON_CALLBACK');
		}
	}

});
