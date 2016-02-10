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
            var topChamp=[];
            SuggestPickService.getSummonerFavoriteChamp(LocalStorage.loadStorage().id).then(function(result) {
                // $scope.summonerFavoriteChampList = result;
                for (var i = 0; i < result.champions.length; i++) {
                    if(result.champions[i].id != 0) {
                        topChamp[i]=result.champions[i];
                    }
                };
                topChamp.sort(function(a, b) {
                    return parseFloat(b.stats.totalSessionsPlayed) - parseFloat(a.stats.totalSessionsPlayed);
                });
                $scope.summonerTop3 = [topChamp[0].id, topChamp[1].id, topChamp[2].id);
                $scope.summonerFavoriteChampList = topChamp;
                // console.log('summonerFavoriteChampList', result);
                console.log('topChamp', $scope.summonerFavoriteChampList);
                console.log('$scope.summonerTop3', $scope.summonerTop3);
            });
        };

        $scope.summonerName = LocalStorage.loadStorage();
        $scope.summonerFavoriteChampList=[2];
        $scope.summonerTop3=[];
        $scope.getSummonerRank();
        $scope.getSummonerFavoriteChamp();
    }
]);