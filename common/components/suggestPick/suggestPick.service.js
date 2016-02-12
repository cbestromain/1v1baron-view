/* Services */

webadminServices.service('SuggestPickService', function($http, $q) {
    return ({
        getAllCounter: getAllCounter,
        getAllChamp: getAllChamp,
        getSummonerFavoriteChamp:getSummonerFavoriteChamp
    });
    

    function getAllCounter(key) {
        console.log('getAllCounter', key);
        var request = $http({
            method: 'POST',
            url: 'http://51.254.115.94:1337/getAllCounter',
            headers: {
                key: key
            }
        });
        return (request.then(handleSuccess, handleError));
    }

    function getSummonerFavoriteChamp(id) {
        // console.log('getSummonerFavoriteChamp', id);
        var request = $http({
            method: 'POST',
            url: 'http://51.254.115.94:1337/getSummonerFavoriteChamp',
            headers: {
                id: id
            }
        });
        return (request.then(handleSuccess, handle404));
    }

    function getAllChamp() {
        console.log('getAllChamp');
        var request = $http({
            method: 'POST',
            url: 'http://51.254.115.94:1337/getAllChamp'
        });
        return (request.then(handleSuccess, handleError));
    }


    function handleError(response) {
        if (!angular.isObject(response.data) || !response.data.message) {
            return ($q.reject('An error occurred, please retry.'));
        }
        return ($q.reject(response.data.message));
    }

    function handle404(response) {
        console.log('response', response);
        if (!angular.isObject(response.data) || !response.data.message) {
            if(response.status == 404){
                return (response.data);
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