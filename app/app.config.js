'use strict';

//configure the route
angular.
module('newsApp').
config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/news-list', {
            template: '<news-list></news-list>'
        }).
        when('/news-detail/:newsId', {
            template: '<news-detail></news-detail>'
        }).
        otherwise('/news-list');
    }
]);