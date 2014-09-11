/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var NavView = Backbone.View.extend({
        template: JST['app/scripts/templates/nav.ejs'],

        tagName: 'ul',

        className: 'nav nav-pills pull-right',

        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });

    return NavView;
});
