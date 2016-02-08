/* Controllers */

webadminControllers.controller('TopbarCtrl', [
	'$scope', '$location', 'LocalStorage', 'EnnemyPickService',
	function($scope, $location, LocalStorage, EnnemyPickService) {
		$scope.getSummonerRank = function() {
            console.log('getSummonerRank');
            EnnemyPickService.getSummonerRank(LocalStorage.loadStorage().id).then(function(result) {
                $scope.summonerRank = result[0];
                console.log('result', result[0]);
            });
        };
        $scope.summonerName = LocalStorage.loadStorage();
        $scope.getSummonerRank();
	}
]);