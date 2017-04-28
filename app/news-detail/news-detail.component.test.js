'use strict';

describe('newsDetail', function() {

    // load the module before each test
    beforeEach(module('newsDetail'));


    describe('NewsDetailController', function() {
        var $httpBackend, ctrl;


        beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('news-data/abc.json')
                        .respond({author: 'abc'});

            $routeParams.newsId = 'abc';

            ctrl = $componentController('newsDetail');
        }));

        it('should fetch the news details', function() {
            jasmine.addCustomEqualityTester(angular.equals);

            expect(ctrl.news).toEqual({});

            $httpBackend.flush();
            expect(ctrl.news).toEqual({author: 'abc'});
        });

    });

});