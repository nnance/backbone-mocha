define([
    'lib/config'
],function(Config){
    'use strict';

    describe('Config Module', function(){
        var config;
        before(function(){
            config = new Config();
        });

        it('does exist', function(){
            expect(config).to.exist;
        });

        it('has a baseUrl property', function(){
            expect(config.baseUrl).to.exist;
        });

        it('has environment set to test', function(){
            expect(config.getEnvironment()).to.equal('test');
        });
    });

});
