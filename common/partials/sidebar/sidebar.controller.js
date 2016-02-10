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
                $scope.summonerFavoriteChampList[0] = topChamp[0];
                $scope.summonerFavoriteChampList[1] = topChamp[1];
                $scope.summonerFavoriteChampList[2] = topChamp[2];
                // console.log('summonerFavoriteChampList', result);
                console.log('topChamp', $scope.summonerFavoriteChampList);
                // for (var j = 0; j < $scope.summonerFavoriteChampList.length; j++) {
                //     EnnemyPickService.getChampById($scope.summonerFavoriteChampList[j].id).then(function(result2) {
                //         // console.log('getChampById', $scope.summonerFavoriteChampList[i].id);
                //         console.log('result2', result2[0].value);
                //         temp=result2[0].value;
                //     });
                //     top3champ[j]=temp;
                // };
            });
        };

        $scope.summonerName = LocalStorage.loadStorage();
        $scope.getSummonerRank();
        $scope.getSummonerFavoriteChamp();
    }
]);