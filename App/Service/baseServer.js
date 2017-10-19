app.factory('ajaxData',function($http,$q){
    return {
        getDate:function(url,type){
            var defer = $q.defer();
            $http({
                url:url,
                method:type
            }).then(function(result){
                defer.resolve(result);
            })
            return defer.promise;
        }
    }
})