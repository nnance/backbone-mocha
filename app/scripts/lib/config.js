define([], function(){
    'use strict';

    var Config = function(){};

    Config.prototype = {
        baseUrl: 'http://localhost:8080/api',
        environment: 'test',

        getEnvironment: function() {
            return this.environment;
        }
    };

    return Config;
});
