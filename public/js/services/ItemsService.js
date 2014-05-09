angular.module('ItemsService', []).factory('Items', function($http) {
	return {
		getItems : function(host, realm, name) {
			return $http.jsonp('http://' + host + '.battle.net/api/wow/character/' + realm + '/' + name + '?fields=items' + '&jsonp=JSON_CALLBACK');
		}
	}

});
