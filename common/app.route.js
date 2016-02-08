'use strict';

/* App Routes */

webadmin.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'common/components/home/home.view.html',
                controller: 'HomeCtrl'
            })
            .when('/ennemyPick', {
                templateUrl: 'common/components/ennemyPick/ennemyPick.view.html',
                controller: 'EnnemyPickCtrl'
            })
            .when('/suggestPick/:name', {
                templateUrl: 'common/components/suggestPick/suggestPick.view.html',
                controller: 'SuggestPickCtrl'
            })
            .when('/formulaire', {
                templateUrl: 'common/components/form/form.view.html',
                controller: 'FormCtrl'
            })
            .when('/duelAdvice/:name/:champ', {
                templateUrl: 'common/components/duelAdvice/duelAdvice.view.html',
                controller: 'DuelAdviceCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }
]);