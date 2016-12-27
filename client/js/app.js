var myAppModule = angular.module('myApp', ['ngRoute', 'ngAnimate']);
myAppModule.config(function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/home',{
		templateUrl: 'partials/home.html'
	})
	.when('/story',{
		templateUrl:'partials/story.html'
	})
	.otherwise({
		redirectTo: '/home'
	});
});


