var app = angular.module('departmentListM', ['toastr']);
app.controller('departmentListCtrl',function($scope,departmentSer,toastr,$stateParams,$state,$location){
         //列表
    departmentSer.InfoAreaList().then(function (response) {
            if(response.data.code == 0){
                $scope.InfoAreaLists = response.data.data;
            }else {
                toastr.error(response.data.msg, '温馨提示');
            }
        })
});

