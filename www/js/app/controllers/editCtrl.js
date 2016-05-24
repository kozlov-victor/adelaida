
app.controller('editCtrl',function($scope,utils, model,i18n, editData, db){
    var s = $scope;
    s.i18n = i18n.getAll();
    s.model = model;
    s.editData = editData;
    s.canEdit = editData.canEdit;
    s.utils = utils;

    s.saveChild = function(child){
        var cloned = child.clone(model.Child);
        db.save(cloned);
        utils.nav('intro');
    }
});