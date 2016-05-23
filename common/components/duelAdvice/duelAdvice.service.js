/* Services */

webadminServices.service('DuelAdviceService', function($http, $q) {
    return ({
        // getAllCounter: getAllCounter,
        // getAllChamp: getAllChamp,
        getMatchup: getMatchup
    });
    

    // function getAllCounter(key) {
    //     console.log('getAllCounter', key);
    //     var request = $http({
    //         method: 'POST',
    //         url: 'http://51.254.115.94:1337/getAllCounter',
    //         headers: {
    //             key: key
    //         }
    //     });
    //     return (request.then(handleSuccess, handleError));
    // }

    function getMatchup(champion, ennemy) {
        console.log('getMatchup ', champion, ennemy);
        var request = $http({
            method: 'POST',
            // url: 'http://51.254.115.94:1337/getMatchup',
            url: 'http://www.1v1baron.com:1337/getMatchup',
            headers: {
                champion: champion,
                ennemy: ennemy
            }
        });
        return (request.then(handleSuccess, handleError));
    }

    // function getAllChamp() {
    //     console.log('getAllChamp');
    //     var request = $http({
    //         method: 'POST',
    //         url: 'http://51.254.115.94:1337/getAllChamp'
    //     });
    //     return (request.then(handleSuccess, handleError));
    // }


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