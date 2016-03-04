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
            console.log('loadMatchup', $scope.updateMatchup);
            FormService.loadMatchup($scope.updateMatchup).then(function(result) {
                if(result.length == 0){
                    console.log('KO', result);
                     $scope.showForm = false;
                } else {
                    console.log('OK now call loadChampSpell', result);
                    console.log('with param', result[0].value.championId);
                    FormService.loadChampSpell(result[0].value.championId).then(function(result2) {
                        console.log('result2', result2);
                        $scope.champSpell = result2;
                        $scope.showForm = true;
                        $scope.matchupDoc = result[0].value;
                        if ($scope.matchupDoc.summonerSpell === undefined){
                            $scope.matchupDoc.summonerSpell = [];
                        };
                        if ($scope.matchupDoc.spellOrder === undefined){
                            $scope.matchupDoc.spellOrder = [];
                        }
                        if ($scope.matchupDoc.mastery === undefined){
                            $scope.matchupDoc.mastery = [];
                        }
                    }, function(err) {
                        console.log('error', err);
                    }); 
                }
            }, function(err) {
                console.log('error', err);
                $scope.showForm = false;
            }); 
        };

        $scope.loadChampSpell = function(champ) {
            console.log('loadChampSpell', champ);
            FormService.loadChampSpell(champ).then(function(result) {
                console.log('champSpell', result);
                $scope.champSpell = result;
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

        $scope.selectSkillOrder = function(spell) {
            console.log('selectSkillOrder ', spell);
            if($scope.matchupDoc.spellOrder.length >= 0){
                if($scope.matchupDoc.spellOrder[0] == spell){
                    $scope.matchupDoc.spellOrder.splice(0,1);
                }
                else if($scope.matchupDoc.spellOrder[1] == spell){
                    $scope.matchupDoc.spellOrder.splice(1,1);
                }
                else if($scope.matchupDoc.spellOrder[2] == spell){
                    $scope.matchupDoc.spellOrder.splice(2,1);
                }
                else if($scope.matchupDoc.spellOrder[3] == spell){
                    $scope.matchupDoc.spellOrder.splice(3,1);
                }
                else {
                    if($scope.matchupDoc.spellOrder.length<=3){
                        $scope.matchupDoc.spellOrder.push(spell);
                    }
                }

            }
                

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


        $scope.selectMastery = function(mastery) {
            console.log('selectMastery ', mastery);
            if($scope.matchupDoc.mastery.length >= 0){
                if($scope.matchupDoc.mastery[0] == mastery){
                    $scope.matchupDoc.mastery.splice(0,1);
                }
                else if($scope.matchupDoc.mastery[1] == mastery){
                    $scope.matchupDoc.mastery.splice(1,1);
                }
                else {
                    if($scope.matchupDoc.mastery.length<=1){
                        $scope.matchupDoc.mastery.push(mastery);
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
        $scope.champSpell = {};
        $scope.matchupDoc.summonerSpell = [];
        $scope.matchupDoc.mastery = [];
        $scope.matchupDoc.spellOrder = [];
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
