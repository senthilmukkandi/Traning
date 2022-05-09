define([], function(){
    'use strict';    
    console.log("Mixin Module");
    return function(targetModule){
        targetModule.newProperty = 'mixins';
        return targetModule;
    };
});