app.controller('sonController',function($scope){

    $scope.change = function(index){
        $scope.$emit('changeCheck',index);
    }

    $scope.changeCount = function(val){

        if(val == "+"){
            $scope.data.num += 1;
        } else if (val == "-"){
            if($scope.data.num<=1) return;
            $scope.data.num -= 1;
        }
        $scope.$emit('changeSum')
    }
})