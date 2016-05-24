
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
            when('/search',{
                controller:'searchCtrl',
                templateUrl:'partial/search.html'
            }).
            otherwise({redirectTo:'/intro'});
    });