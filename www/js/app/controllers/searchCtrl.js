



app.controller('searchCtrl',function($scope,i18n, model,editData){
    var s = $scope;
    s.i18n = i18n.getAll();
    s.model = model;
    s.editData = editData;

});