/* Controllers */

webadminControllers.controller('HomeCtrl', [
    '$scope', '$http', '$location', 'LocalStorage', 'HomeService',
    function($scope, $http, $location, LocalStorage, HomeService) {
        
        $scope.validSummoner = function(summoner) {
        	$scope.master = angular.copy(summoner);

        	HomeService.validSummoner($scope.master).then(function(summoner) {
                if (summoner) {
                	// console.log('summoner', summoner);
                    LocalStorage.saveStorage(summoner);
					$location.path('/ennemyPick').replace();
                }
            }, function(err) {
                $scope.errorMessage = err;
            	console.log('error', $scope.errorMessage);
            });
			
        };


    }




]);