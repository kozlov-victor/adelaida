
app.controller('editCtrl',function($scope,utils, model,i18n, editData){
    var s = $scope;
    s.i18n = i18n.getAll();
    s.model = model;
    s.editData = editData;


    s.saveChild = function(child){
        console.log(child.toJsonObj());
    }

});