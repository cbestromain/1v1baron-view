/* Controllers */

webadminControllers.controller('SidebarCtrl', [
    '$scope', '$location', 'LocalStorage', 'EnnemyPickService', 'SuggestPickService',
    function($scope, $location, LocalStorage, EnnemyPickService, SuggestPickService) {
        $scope.getSummonerRank = function() {
            console.log('getSummonerRank');
            EnnemyPickService.getSummonerRank(LocalStorage.loadStorage().id).then(function(result) {
                $scope.summonerRank = result[0];
                $scope.miniSeries = result[0].entries[0].miniSeries.progress;
                // console.log('getSummonerRank', result[0]);
            });
        };

        $scope.getChampById = function() {
           EnnemyPickService.getChampById().then(function(result) {
                $scope.championIdList = result;
                console.log('championIdList', $scope.championIdList);
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
                $scope.summonerFavoriteChampList = topChamp;
                console.log('summonerFavoriteChampList', $scope.summonerFavoriteChampList);
            });
        };


        $scope.summonerName = LocalStorage.loadStorage();
        $scope.summonerFavoriteChampList=[];
        $scope.summonerTop3=[];
        $scope.championIdList=[];
        $scope.getSummonerRank();
        $scope.getSummonerFavoriteChamp();
        $scope.getChampById();

    }
]);