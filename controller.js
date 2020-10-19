app.controller('myCtrl', function($scope, $http) {
	$scope.name = 'Angular ';
	users = [];
	$http.get('https://raw.githubusercontent.com/mppanayotov/test1/master/assets/json/users.json').success(function(res) {
		$scope.users = res;
		console.table($scope.users);
	});
	$scope.sort = {
		column: '',
		descending: false
	};
	$scope.changeSorting = function(column) {
		var sort = $scope.sort;
		if (sort.column == column) {
			sort.descending = !sort.descending;
		} else {
			sort.column = column;
			sort.descending = false;
		}
	};
});
