app.controller('brandController', function ($scope, $controller, brandService,) {

    $controller('baseController',{$scope:$scope});//继承

    /*
                   //所有查询所有品牌列表
                   $scope.findAll = function () {
                       $http.get('../brand/findAll.do').success(function (brandList) {
                           $scope.brandList = brandList;
                       })
                   };*/

     /* //定义findPage方法,发起分页查询Brand的请求
      $scope.findPage = function (page, rows) {
          $http.get('../brand/findPage.do?page=' + page + '&rows=' + rows).success(function (pageResult) {
              $scope.brandList = pageResult.rows;//每页显示的记录
              $scope.paginationConf.totalItems = pageResult.total;//更新总记录数
          })
      };*/

    /*  //保存
      $scope.save = function () {
          $http.post('../brand/add.do', $scope.entity).success(function (result) {
              if (result.success) {
                  //如果插入成功,重新查询
                  $scope.reloadList();
              } else {
                  //如果失败弹窗提醒
                  alert(result.message)
              }
          })
      };*/

    //根据id查询Brand
    $scope.findOne = function (id) {
        brandService.findOne(id).success(function (brand) {
            $scope.entity = brand;
        })
    };

    //新增和修改的功能
    $scope.save = function () {

        var object = null;
        if ($scope.entity.id != null) {//如果有id就执行修改方法
            object = brandService.update($scope.entity);
        } else {
            object = brandService.add($scope.entity)
        }
        object.success(function (result) {
            if (result.success) {
                $scope.reloadList();
            } else {
                alert(result.message);
            }
        })
    };


    //删除
    $scope.dele = function () {
        brandService.dele($scope.selectIds).success(function (result) {
            if (result.success) {
                $scope.reloadList();
            } else {
                alert(result.message);
            }
        })
    };

    //条件查询
    $scope.searchEntity = {};//定义搜索对象
    $scope.search = function (page, rows) {
        brandService.search(page,rows,$scope.searchEntity).success(function (pageResult) {
            $scope.brandList = pageResult.rows;//每页显示的数据
            $scope.paginationConf.totalItems = pageResult.total;//更新总记录数
        })
    }
});
