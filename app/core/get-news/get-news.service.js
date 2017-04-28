'use strict';

angular.
    module('core.getNews').
    factory('GetNews', ['$resource',
        function($resource) {
            return $resource('news-data/:newsId.json', {}, {
                //queryAll method is used to get the list of all news
                queryAll: {
                    method: 'GET',
                    params: {newsId: 'news-list'},
                    isArray: true
                }
            });
        }
    ]);