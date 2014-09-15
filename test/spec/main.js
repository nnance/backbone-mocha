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
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        spec: '.',
        lib: '/scripts/lib',
        templates: '/scripts/templates',
        views: '/scripts/views'
    }
});

define(function(require){
	require('spec/views/main');
    require('spec/lib/config');

    window.mocha.run();
});
