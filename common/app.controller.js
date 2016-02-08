'use strict';

/* Controllers */

var webadminControllers = angular.module('webadminControllers', []);

webadminControllers
.controller('GeneralCtrl', [
    '$scope', '$location',
    function($scope, $location) {
        $scope.stateSidebar = true;

        function enableSidebar(stateSidebar) {
            $scope.stateSidebar = !stateSidebar;
            $scope.toggleSidebar = stateSidebar;
        }

        $scope.enableSidebar = enableSidebar;
    }
])
.controller('ModalInstanceCtrl', [
    '$scope', '$modalInstance',
	function ($scope, $modalInstance) {
	    $scope.ok = function () {
	        $modalInstance.close();
	    };

	    $scope.cancel = function () {
	        $modalInstance.dismiss('cancel');
	    };
    }
]);