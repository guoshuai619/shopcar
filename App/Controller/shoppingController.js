app.controller('shoppingController',["$scope","ajaxData",function($scope,ajaxData){
    function price(){
        $scope.goodsPrice = 0;
        $scope.goodsCount = 0;
        $scope.datas.forEach(function(val){
            if(val.flag){
                $scope.goodsPrice += val.num * val.price;
                $scope.goodsCount += val.num;
            }
        })
    }
    ajaxData.getDate("http://localhost:8000/?data","get").then(function(result){
        $scope.datas = result.data;
        price()
    })
    $scope.flag = false;
    $scope.allChange = function(){
        $scope.flag = !$scope.flag;

        $scope.datas.forEach(function(val,ind){
            val.flag = $scope.flag;
        })
        price()
    }

    $scope.$on('changeCheck',function(event,ind){
        var count = 0;
        $scope.datas[ind].flag = !$scope.datas[ind].flag;
        $scope.datas.forEach(function(val,ind){
            if(val.flag){
                count++;
            }
        })
        if(count == $scope.datas.length){
            $scope.flag = true;
        } else {
            $scope.flag = false;
        }
        price()
    })
    $scope.$on('changeSum',function(event){
        price()
    })
}]);