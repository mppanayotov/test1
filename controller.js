app.controller('myCtrl', function($scope, $http) {
	$scope.name = 'Angular ';

	$http.get('users.json').success(function (res){
		$scope.users = res;
		console.table($scope.users);
	});
});
