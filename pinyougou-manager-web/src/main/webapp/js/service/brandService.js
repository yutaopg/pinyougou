app.service('brandService', function ($http) {
    //根据id查询Brand
    this.findOne = function (id) {
        return $http.get('../brand/findOne.do?id=' + id);
    };

    //新增
    this.add = function (entity) {
        return $http.post('../brand/add.do', entity);
    };
    //修改
    this.update = function (entity) {
        return $http.post('../brand/update.do', entity);
    };

    //删除
    this.dele = function (ids) {
        return $http.get('../brand/delete.do?ids=' + ids);
    };

    //条件查询

    this.search = function (page, rows, searchEntity) {
        return $http.post('../brand/search.do?page=' + page + '&rows=' + rows, searchEntity);
    }

    //关联品牌
    this.selectOptionList=function () {
       return $http.get('../brand/selectOptionList.do')
    }
});