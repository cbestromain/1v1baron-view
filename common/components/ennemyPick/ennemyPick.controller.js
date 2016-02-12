/* Controllers */

webadminControllers.controller('EnnemyPickCtrl', [
    '$scope', '$http', '$location', 'LocalStorage', 'EnnemyPickService',
    function($scope, $http, $location, LocalStorage,  EnnemyPickService) {

        $scope.getAllChamp = function() {
            console.log('getAllChamp');
           EnnemyPickService.getAllChamp().then(function(result) {
                $scope.championList = result;
                console.log('resultImg', result);
            });
        };

        $scope.getChampImg = function(id) {
            console.log('getChampImg');
           EnnemyPickService.getAllChamp().then(function(result) {
                $scope.championList = result;
                console.log('resultImg', result);
            });
        };

        // $scope.getSummonerRank = function() {
        //     console.log('getSummonerRank');
        //    EnnemyPickService.getSummonerRank(LocalStorage.loadStorage().id).then(function(result) {
        //         $scope.summonerRank = result[0];
        //         // console.log('result', result[0]);
        //     });
        // };


        $scope.selectChamp = function() {
            $location.path('/suggestPick').replace();
            // EnnemyPickService.selectChamp().then(function(result) {
            //     console.log('result', result);
            //     if (true) {
            //         $location.path('/suggestPick').replace();
            //     }
            // }, function(err) {
            //     console.log('error', err);
            //     $scope.errorMessage = err;
            // });
            
        };

        $scope.summonerRank = [];
        $scope.summonerName = LocalStorage.loadStorage();    
        $scope.championList = [];
        $scope.filterChamp = '';
        $scope.getAllChamp();
        // $scope.getSummonerRank();



    }
]);