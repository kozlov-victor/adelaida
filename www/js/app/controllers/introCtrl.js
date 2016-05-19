
app.controller('introCtrl',function($scope,editData,model,i18n,utils){
    var s = $scope;
    s.i18n = i18n.getAll();
    s.model = model;
    s.editData = editData;

    s.toCreateChildPage = function(){
        editData.currChildInEdit = new model.Child();
        utils.nav('edit');
    };


});