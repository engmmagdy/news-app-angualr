'use strict';

//register the component
angular.
    module('newsList').
    component('newsList', {
        templateUrl: 'news-list/news-list.template.html',
        controller: ['GetNews',
            function (GetNews) {
                this.allNews = GetNews.queryAll();
                this.orderProp = '-publishedAt';
            }

        ]
    });