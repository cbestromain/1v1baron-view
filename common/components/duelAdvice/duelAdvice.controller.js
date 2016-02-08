/* Controllers */

webadminControllers.controller('DuelAdviceCtrl', [
    '$scope', '$http', '$location', '$routeParams', 'LocalStorage', 'DuelAdviceService',
    function($scope, $http, $location, $routeParams, LocalStorage,  DuelAdviceService) {

        // $scope.getAllCounter = function() {
        //     var key = $scope.nameChampSelected;
        //     console.log('getAllCounter', key);
        //     DuelAdviceService.getAllCounter(key).then(function(result) {
        //         $scope.allCounterList = result;
        //         console.log('allCounterList', result);
        //     });
        // };

        $scope.getMatchup = function() {
            var ennemy = $scope.nameChampSelected;
            var champ = $scope.nameYourChamp

            DuelAdviceService.getMatchup(champ, ennemy).then(function(result) {
                $scope.getMatchupDoc = result;
                console.log('getMatchupDoc', result);
            });
        };


        // $scope.getAllChamp = function() {
        //    DuelAdviceService.getAllChamp().then(function(result) {
        //         $scope.championList = result;
        //         console.log('getAllChamp', result);
        //     });
        // };

        $scope.nameChampSelected = $routeParams.name;
        $scope.nameYourChamp = $routeParams.champ;
        // $scope.allCounterList = [];
        $scope.getMatchupDoc = [];
        $scope.championList = [];
        // $scope.getAllCounter();
        // $scope.getAllChamp();
        $scope.getMatchup();
        
    }
]);