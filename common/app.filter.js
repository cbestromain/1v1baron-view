'use strict';

/* Filters */

var webadminFilters = angular.module('webadminFilters', []);

webadminFilters
.filter('moment', function() {
    return function(dateString, format) {
        return moment(dateString).format(format);
    };
});