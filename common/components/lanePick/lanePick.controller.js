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

        $scope.selectLane = function(lane) {
            console.log('selectLane');
            $scope.laneSelected = lane;
            $location.path('/ennemyPick').replace();
        };   


        $scope.summonerRank = [];
        $scope.summonerName = LocalStorage.loadStorage();    
        $scope.championList = [];
        $scope.filterChamp = '';
        $scope.laneSelected = '';
        $scope.getAllChamp();
        // $scope.getSummonerRank();



    }
]);