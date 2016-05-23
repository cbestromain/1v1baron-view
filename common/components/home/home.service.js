/* Services */

webadminServices.service('HomeService', function($http, $q) {
    return ({
        validSummoner: validSummoner
    });
    
    function validSummoner(summoner) {
        var request = $http({
            method: 'GET',
            // url: 'http://51.254.115.94:1337/getSummonerInfo',
            url: 'http://www.1v1baron.com:1337/getSummonerInfo',
            headers: {
                'region': summoner.country,
                'summoner_name': summoner.summonerName
            }
        });

        return (request.then(handleSuccess, handleError));
    }


    function handleError(response) {
        console.log('response', response);
        if (!angular.isObject(response.data) || !response.data.message) {
            if(response.status == 404){
                return ($q.reject(response.data));
            } else {
                return ($q.reject('An error occurred, please retry.'));
            }
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
