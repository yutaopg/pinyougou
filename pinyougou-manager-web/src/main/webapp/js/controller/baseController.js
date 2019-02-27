app.controller('baseController', function ($scope) {
    //重新加载列表 数据
    $scope.reloadList = function () {
        //切换页码
        //参数是分页控件中获得
        $scope.search($scope.paginationConf.currentPage,
            $scope.paginationConf.itemsPerPage);
    };

    //分页控件配置
    $scope.paginationConf = {
        currentPage: 1, //当前页码
        totalItems: 10,//总记录数
        itemsPerPage: 10,//每页展示条数
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function () {
            $scope.reloadList();//重新加载
        }
    };

    $scope.selectIds = []; //复选框选中的id集合
    $scope.updateSelection = function ($event, id) {
        if ($event.target.checked) {
            $scope.selectIds.push(id);
        } else {
            var idx = $scope.selectIds.indexOf(id);
            $scope.selectIds.splice(idx, 1);//参数1:位置索引;参数2:删除个数
        }
    };

    //提取 json 字符串数据中某个属性，返回拼接字符串 逗号分隔
    $scope.jsonToString = function (jsonString, key) {
        var json = JSON.parse(jsonString);//将字符串转换为json对象
        var value = '';
        for (var i = 0; i < json.length; i++) {
            if (i > 0) {
                value += ',';
            }
            value += json[i][key];
        }
        return value;
    }
});