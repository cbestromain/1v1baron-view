'use strict';

/* Services */

var webadminServices = angular.module('webadminServices', []);

webadmin.config(function(localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('webadmin')
        .setStorageType('localStorage')
        .setNotify(true, true)
});

webadmin.service('LocalStorage', function(localStorageService) {
    this.saveStorage = function(data) {
        storage = data;
        if (localStorageService.isSupported) {
            localStorageService.set('loginStorage', data);
        } else if (localStorageService.cookie.isSupported) {
            localStorageService.cookie.set('loginStorage', data);
        }
    };

    this.loadStorage = function() {
        return storage;
    };

    this.clearStorage = function() {
        storage = {};
        if (localStorageService.isSupported) {
            localStorageService.remove('loginStorage');
        } else if (localStorageService.cookie.isSupported) {
            localStorageService.cookie.remove('loginStorage');
        }
    };

    if (localStorageService.isSupported) {
        if (localStorageService.get('loginStorage')) {
            var storage = localStorageService.get('loginStorage');
        } else {
            var storage = {};
        }
    } else if (localStorageService.cookie.isSupported) {
        if (localStorageService.cookie.get('loginStorage')) {
            var storage = localStorageService.cookie.get('loginStorage');
        } else {
            var storage = {};
        }
    } else {
        var storage = {};
    }
});