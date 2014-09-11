/* global describe, it */
'use strict';

define([
    'views/main',
], function (MainView) {
    describe('Main View', function () {
        describe('when rendering the view', function () {
            var view;
            beforeEach(function(){
                view = new MainView({el: '#container'});
                view.render();
            });

            it('should have a nav bar', function () {
                expect(view.$('.nav').length).to.equal(1);
            });
        });
    });
});
