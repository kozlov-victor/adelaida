
app.


    config(function($routeProvider){
        $routeProvider.
            when('/intro',{
                controller:'introCtrl',
                templateUrl:'partial/intro.html'
            }).
            when('/edit',{
                controller:'editCtrl',
                templateUrl:'partial/edit.html'
            }).
            otherwise({redirectTo:'/intro'});
    });