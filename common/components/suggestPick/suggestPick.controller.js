/* Controllers */

webadminControllers.controller('SuggestPickCtrl', [
    '$scope', '$http', '$location', '$routeParams', 'LocalStorage', 'SuggestPickService',
    function($scope, $http, $location, $routeParams, LocalStorage,  SuggestPickService) {

        $scope.getAllCounter = function() {
            var key = $scope.nameChampSelected;
            console.log('getAllCounter', key);
            SuggestPickService.getAllCounter(key).then(function(result) {
                $scope.allCounterList = result;
                console.log('allCounterList', result);
            });
        };

        $scope.getSummonerFavoriteChamp = function() {
            SuggestPickService.getSummonerFavoriteChamp(LocalStorage.loadStorage().id).then(function(result) {
                $scope.summonerFavoriteChampList = result;
                console.log('summonerFavoriteChampList', result);
            });
        };


        $scope.getAllChamp = function() {
           SuggestPickService.getAllChamp().then(function(result) {
                $scope.championList = result;
                console.log('getAllChamp', result);
            });
        };

        $scope.nameChampSelected = $routeParams.name;
        $scope.allCounterList = [];
        $scope.summonerFavoriteChampList = [];
        $scope.championList = [];
        $scope.getAllCounter();
        $scope.getAllChamp();
        $scope.getSummonerFavoriteChamp();
        
    }
]);