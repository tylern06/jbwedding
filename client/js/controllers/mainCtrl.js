myAppModule.controller('mainCtrl', function($scope, $location) {
	$scope.testing = $location.path();
})