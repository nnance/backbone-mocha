/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/nav',
], function ($, _, Backbone, JST, NavView) {
    'use strict';

    var MainView = Backbone.View.extend({
        template: JST['app/scripts/templates/main.ejs'],

        className: 'container',

        initialize: function() {
            this.nav = new NavView();
        },

        render: function () {
            this.$el.html(this.template());
            this.$('.header').prepend(this.nav.render().el);
        }
    });

    return MainView;
});
