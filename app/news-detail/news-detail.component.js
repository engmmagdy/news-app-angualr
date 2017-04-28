'use strict';

//define component with controller
angular
    .module('newsDetail')
    .component('newsDetail', {
        templateUrl: 'news-detail/news-detail.template.html',
        controller: ['$routeParams', '$location', 'GetNews',//need $location service for directing back to news-list

            function NewsDetailController($routeParams, $location, GetNews) {
                var self = this;
                self.newsId = $routeParams.newsId;

                //use the default get action of GetNews
                self.news = GetNews.get({newsId: self.newsId});

                //event handler for click on Back button
                self.handleClickBack = function () {
                    $location.path('/news-list');
                };
            }
        ]
    });