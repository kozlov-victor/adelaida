
app.

factory('utils',function(){

        this.dateToInputValue = function(d) {
            var normalize = function(s) {
                s+='';
                return s.length==1?'0'+s:s;
            };
            var year = d.getFullYear();
            var month =  d.getMonth()+1;
            var date = d.getDate();
            return  normalize(year)+'-'+ normalize(month)+'-'+normalize(date);
        };

        this.inputValueToDate = function(value) {
            var arr = value.split('-');
            var year = +arr[0];
            var month =  +arr[1];
            var date = +arr[2];
            return  new Date(year,month-1,date);
        };

        this.nav = function(hash){
            location.hash = '/'+hash;
        };

        return this;

});