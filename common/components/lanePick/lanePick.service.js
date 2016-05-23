/* Services */

webadminServices.service('LanePickService', function($http, $q) {
    return ({
        getAllChamp: getAllChamp,
    });
    

    function getAllChamp() {
        console.log('getAllChamp');
        var request = $http({
            method: 'POST',
            // url: 'http://51.254.115.94:1337/getAllChamp'
            url: 'http://www.1v1baron.com:1337/getAllChamp'
            
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
