

app.

factory('db',function(collections,model){

    var list = new collections.List();
    var CHILDREN_DB_NAME = 'children';

    this.save = function(obj){
        list.add(obj);
        list.save(CHILDREN_DB_NAME);
    };

    (function(){
        list.load(CHILDREN_DB_NAME,model.Child);
    })();

    return this;

});