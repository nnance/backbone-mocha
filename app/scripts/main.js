/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap'
    }
});

require([
    'jquery',
    'backbone',
    'views/main'
], function ($, Backbone, MainView) {
    var mainView = new MainView();
    mainView.render();
    $('body').append(mainView.el);
    Backbone.history.start();
});
