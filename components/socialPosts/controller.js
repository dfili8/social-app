"use strict";
{
    angular.module('app')
        .controller('SocialPosts', function(){
            const $ctrl = this;
            $ctrl.title = "My Thoughts";
            $ctrl.show = false;

            $ctrl.list = [
                {subject:'dog', body:'My dog is pretty cool'},
                {subject:'cat', body:'My cat is pretty cool'},
                {subject:'turtle', body:'My turtle is pretty cool'} 
            ];

            $ctrl.hide = function(){
                $ctrl.show = !$ctrl.show;
            }

            $ctrl.addPost = function(post){
                $ctrl.list.unshift(post);
            }
        });
}