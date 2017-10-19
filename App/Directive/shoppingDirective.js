app.directive('shoppingDirective',function(){
    return {
        templateUrl:'App/View/shopping.html',
        controller:"sonController",
        scope:{
            data:'=data',
            index:'@index'
        }
    }
})