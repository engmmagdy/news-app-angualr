'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('news-app-angular', function() {


    it('should automatically redirect to /news-list when location hash/fragment is empty', function() {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch("/news-list");
    });


    describe('View: news-list', function() {

        beforeEach(function() {
            browser.get('index.html#!/news-list');
        });

        it('should filter the list according to user input in the search box', function() {
            var newsList = element.all(by.repeater('news in $ctrl.allNews'));
            var query = element(by.model('$ctrl.query'));

            expect(newsList.count()).toBe(3);

            query.sendKeys('fa');
            expect(newsList.count()).toBe(2);

            query.clear();
            query.sendKeys('facebook');
            expect(newsList.count()).toBe(1);
        });

        it('should be possible to control list order via the drop-down menu', function() {

            var orderSelect = element(by.model('$ctrl.orderProp'));
            var titleOption = orderSelect.element(by.css('option[value="title"]'));
            var newsTitleColumn = element.all(by.repeater('news in $ctrl.allNews').column('news.title'));

            function getTitles() {
                return newsTitleColumn.map(function(element) {
                    return element.getText();
                });
            }

            titleOption.click();

            expect(getTitles()).toEqual([
                "Facebook says government requests for your information are on the rise",
                "FCC thinks throttling doesn’t hurt consumers",
                "How Instagram became the most-used app on my phone"
            ]);
        });

        it('should direct to the correct news detail link', function() {
            var query = element(by.model('$ctrl.query'));
            query.sendKeys('facebook');

            element.all(by.css('a')).first().click();
            expect(browser.getLocationAbsUrl()).toBe('/news-detail/fb-says-gov-requests-information');
        });

    });


    describe('View: news-detail', function() {

        beforeEach(function() {
            browser.get('index.html#!/news-detail/fb-says-gov-requests-information');
        });

        it('should display the `fb-says-gov-requests-information` page', function() {
            expect(element(by.binding('$ctrl.news.title')).getText()).toBe('Facebook says government requests for your information are on the rise');
        });

        it('should click `Back` button to direct to `news-list` page', function () {
            var backButton = element(by.css('.btn-default'));
            backButton.click();
            expect(browser.getLocationAbsUrl()).toBe('/news-list');
        });

    });
});
