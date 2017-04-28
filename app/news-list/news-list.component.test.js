'use strict';

describe('newsList', function () {

    //load the module before each test
    beforeEach(module('newsList'));

    describe('NewsListController', function () {
        var $httpBackend, ctrl;
        beforeEach(inject(function (_$httpBackend_, $componentController) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('news-data/news-list.json')
                        .respond([
                            {id: 'instagram-became-most-used-app'},
                            {id: 'fb-says-gov-requests-information'},
                            {id: 'fcc-thinks-throttling-not-hurt-consumers'}
                        ]);
            ctrl = $componentController('newsList');
        }));

        it("should create a `allNews` property with 3 news received with $http", function () {
            jasmine.addCustomEqualityTester(angular.equals);
            expect(ctrl.allNews).toEqual([]);
            $httpBackend.flush();
            expect(ctrl.allNews).toEqual([
                {id: 'instagram-became-most-used-app'},
                {id: 'fb-says-gov-requests-information'},
                {id: 'fcc-thinks-throttling-not-hurt-consumers'}
            ]);
        });

        it("default value of `orderProp` should be `-publishedAt`", function () {
            expect(ctrl.orderProp).toBe('-publishedAt');
        });
    });
});