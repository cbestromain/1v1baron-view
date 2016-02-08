/* Services */

webadminServices.service('FormService', function($http, $q) {
    return ({
        getChampionList: getChampionList,
        loadMatchup: loadMatchup,
        saveMatchup: saveMatchup,
        loadChampSpell: loadChampSpell
    });
    
    function getChampionList() {
        var request = $http({
            method: 'GET',
            url: 'http://1v1baron.com:1337/getAllChampName',
            headers: {
                // 'region': summoner.country,
                // 'summoner_name': summoner.summonerName
            }
        });

        return (request.then(handleSuccess, handleError));
    }

    function loadMatchup(matchup) {
        var champion = matchup.champion;
        var ennemy = matchup.ennemy;
        var lane = matchup.lane;
        console.log('champion', champion);
        console.log('ennemy', ennemy);

        var request = $http({
            method: 'GET',
            url: 'http://1v1baron.com:1337/loadMatchup',
            headers: {
                champion: champion,
                ennemy: ennemy,
                lane: lane
            }
        });

        return (request.then(handleSuccess, handleError));
    }


        function loadChampSpell(champ) {
        console.log('loadChampSpell', champ);

        var request = $http({
            method: 'GET',
            url: 'http://1v1baron.com:1337/getChampSpell',
            headers: {
                champid: champ,
            }
        });

        return (request.then(handleSuccess, handleError));
    }

    function saveMatchup(matchup) {
        var champion = matchup.champion;
        var ennemy = matchup.ennemy;
        var lane = matchup.lane;
         console.log('matchup service', matchup);
        var request = $http({
            method: 'GET',
            url: 'http://1v1baron.com:1337/saveMatchup',
            headers: {
                matchup: JSON.stringify(matchup),
                // ennemy: ennemy,
                // lane: lane
            }
        });

        return (request.then(handleSuccess, handleError));
    }


    function handleError(response) {
        if (!angular.isObject(response.data) || !response.data.message) {
            return ($q.reject('An error occurred, please retry.'));
        }
        return ($q.reject(response.data.message));
    }

    function handleSuccess(response) {
        return (response.data);
    }

    function handleStatus(response) {
        return (response.data);
    }
});
