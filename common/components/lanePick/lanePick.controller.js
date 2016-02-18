/* Controllers */

webadminControllers.controller('LanePickCtrl', [
    '$scope', '$http', '$location', 'LocalStorage', 'LanePickService',
    function($scope, $http, $location, LocalStorage,  LanePickService) {

        $scope.getAllChamp = function() {
            console.log('getAllChamp');
           LanePickService.getAllChamp().then(function(result) {
                $scope.championList = result;
                console.log('resultImg', result);
            });
        };


        $scope.summonerRank = [];
        $scope.summonerName = LocalStorage.loadStorage();    
        $scope.championList = [];
        $scope.filterChamp = '';
        $scope.getAllChamp();
        // $scope.getSummonerRank();



    }
]);