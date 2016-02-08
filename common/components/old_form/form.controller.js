/* Controllers */

webadminControllers.controller('FormCtrl', [
    '$scope', '$http', '$location', 'LocalStorage', 'FormService',
    function($scope, $http, $location, LocalStorage, FormService) {
        
        $scope.getChampionList = function() {

        	FormService.getChampionList().then(function(result) {
                $scope.championList = result;
            }, function(err) {
            	console.log('error', err);
            });	
        };

        $scope.loadMatchup = function() {
            FormService.loadMatchup($scope.updateMatchup).then(function(result) {
                if(result.length == 0){
                    console.log('KO', result);
                     $scope.showForm = false;
                } else {
                    console.log('OK', result);
                    $scope.showForm = true;
                    $scope.matchupDoc = result[0].value;
                    if ($scope.matchupDoc.summonerSpell === undefined){
                        $scope.matchupDoc.summonerSpell = [];
                    }
                }
            }, function(err) {
                console.log('error', err);
                $scope.showForm = false;
            }); 
        };

        $scope.loadChampSpell = function(champ) {
            console.log('loadChampSpell', champ);
            FormService.loadChampSpell(champ).then(function(result) {
                console.log('result', result);
            }, function(err) {
                console.log('error', err);
            }); 
        };

        


        $scope.saveMatchup = function(matchup) {
            console.log('saveMatchup', matchup);
            // $scope.matchupDoc.difficulty = $scope.rate
            console.log('$scope.matchupDoc', $scope.matchupDoc);
            FormService.saveMatchup($scope.matchupDoc).then(function(result) {
                // console.log('matchup', matchup);
            }, function(err) {
                console.log('error', err);
            }); 
        };

        $scope.selectSummoner = function(spell) {
            console.log('selectSummoner ', spell);
            if($scope.matchupDoc.summonerSpell.length >= 0){
                if($scope.matchupDoc.summonerSpell[0] == spell){
                    $scope.matchupDoc.summonerSpell.splice(0,1);
                }
                else if($scope.matchupDoc.summonerSpell[1] == spell){
                    $scope.matchupDoc.summonerSpell.splice(1,1);
                }
                else {
                    if($scope.matchupDoc.summonerSpell.length<=1){
                        $scope.matchupDoc.summonerSpell.push(spell);
                    }
                }

            }
                

        };

        $scope.hoveringOver = function(value) {
            console.log('hoveringOver', value);
            $scope.overStar = value;
        };

        $scope.hoveringOut = function() {
            console.log('hoveringOut');
            $scope.overStar = null;
            // $scope.percent = 100 * (value / $scope.max);
        };


        // $scope.rate = 1;
        $scope.max = 5;
        $scope.ratingStates = [
            {stateOn: 'baron-on', stateOff: 'baron-off'},
        ];

        $scope.championList = [];
        $scope.matchupDoc = {};
        $scope.matchupDoc.summonerSpell = [];
        $scope.showForm = false;
        // $scope.toto = "ok";
        // $scope.saveMatchup = {};
        $scope.updateMatchup = {
            champion: "",
            ennemy: "",
            lane: ""
        };
        $scope.getChampionList(); 
    }
]);