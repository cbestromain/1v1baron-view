/* Services */

webadminServices.service('EnnemyPickService', function($http, $q) {
    return ({
        getAllChamp: getAllChamp,
        getChampImg: getChampImg,
        getSummonerRank: getSummonerRank,
        selectChamp: selectChamp,
        getChampById: getChampById,
    });
    

    function getAllChamp() {
        console.log('getAllChamp');
        var request = $http({
            method: 'POST',
            url: 'http://51.254.115.94:1337/getAllChamp'
        });
        return (request.then(handleSuccess, handleError));
    }

    function getSummonerRank(id) {
        console.log('getSummonerRank');
        var request = $http({
            method: 'POST',
            url: 'http://51.254.115.94:1337/getSummonerRank',
            headers: {
                id: id
            }
        });
        return (request.then(handleSuccess, handleError));
    }


    function selectChamp() {
        // var request = $http({
        //     method: 'GET',
        //     url: 'http://51.254.115.94:1337/getSummonerInfo',
        //     headers: {
        //         'region': summoner.country,
        //         'summoner_name': summoner.summonerName
        //     }
        // });
        console.log('select champion');
        return (request.then(handleSuccess, handleError));
    }

    function getChampImg(id) {
        console.log('getChampImg');
        var request = $http({
            method: 'POST',
            url: 'http://51.254.115.94:1337/getChampImage',
            headers: {
                id: id
            }
        });

        return (request.then(handleSuccess, handleError));
    }

    function getChampById() {
        var request = $http({
            method: 'POST',
            url: 'http://51.254.115.94:1337/getChampById',
        });

        return (request.then(handleSuccess, handleError));
    }

    // function handleError(response) {
    //     if (!angular.isObject(response.data) || !response.data.message) {
    //         return ($q.reject('An error occurred, please retry.'));
    //     }
    //     return ($q.reject(response.data.message));
    // }

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
