angular.module('AngularJS-WoW', ['ngRoute', 'appRoutes', 'MainCtrl', 'MainService', 'NerdCtrl', 'NerdService', 'GeekCtrl', 'GeekService'])
.config(function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});