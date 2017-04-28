'use strict';

//register the component
angular.
    module('newsList').
    component('newsList', {
        templateUrl: 'news-list/news-list.template.html',
        controller: ['GetNews',
            function NewsListController(GetNews) {
                var self = this;
                self.allNews = GetNews.queryAll();
                self.orderProp = '-publishedAt';
            }

        ]
    });