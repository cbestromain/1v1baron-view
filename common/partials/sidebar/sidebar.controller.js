/* Controllers */

webadminControllers.controller('SidebarCtrl', [
    '$scope', '$location', 'LocalStorage', 'EnnemyPickService', 'SuggestPickService',
    function($scope, $location, LocalStorage, EnnemyPickService, SuggestPickService) {
        $scope.getSummonerRank = function() {
            console.log('getSummonerRank');
            EnnemyPickService.getSummonerRank(LocalStorage.loadStorage().id).then(function(result) {
                $scope.summonerRank = result[0];
                // console.log('result', result[0]);
            });
        };

        $scope.getSummonerFavoriteChamp = function() {
            var topChamp=[]
            SuggestPickService.getSummonerFavoriteChamp(LocalStorage.loadStorage().id).then(function(result) {
                $scope.summonerFavoriteChampList = result;
                for (var i = 0; i < result.length; i++) {
                    if(result[i].id != 0) {
                        topChamp[i]=result[i];
                    }
                };
                topChamp.sort(function(a, b) {
                    return parseFloat(a.price) - parseFloat(b.price);
                });
                console.log('summonerFavoriteChampList', result);
            });
        };

        $scope.summonerName = LocalStorage.loadStorage();
        $scope.getSummonerRank();
        $scope.getSummonerFavoriteChamp();
    }
]);