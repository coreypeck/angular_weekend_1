var myApp = angular.module("myApp", []);

myApp.controller("empController", ["$scope", function($scope) {
    console.log("I'm working!");
    var i = 0;
    setBlank($scope);
    $scope.summary = [{}];
    $scope.getEmp = function() {
        sendEmp($scope, i);
        i++;
    }
    $scope.delEmp = function(id, empSal) {
      $scope.summary = [{}];
      console.log("Delete is running");
      console.log($scope.summary);
      delete $scope.summary[id];
      console.log($scope.summary);
      $scope.summary.forEach(function(worker, index) {
        if(worker == undefined){
          return;
        }
        else{
          $scope.summary.push(worker);
          $scope.summary[index].arrayNum = index;
          console.log($scope.summary[index]);
        }
      });
      // $scope.summary.forEach(worker){
      //
      // }
      // $scope.getEmp();
    }
}]);

function sendEmp($scope, i) {
    console.log("empSummary:", $scope.empFName, $scope.empLName, $scope.empNum, $scope.empTitle);
    if ($scope.empFName == "" || $scope.empLName == "" || $scope.empNum == 0 || $scope.empTitle == "") {
        console.log("Make sure you have all fields filled out and all number values aren't 0");
    } else {
        if (i == 0) {
            $scope.summary.shift();
        }
        pushArray($scope, i);
    }
}

function setBlank($scope, i) {
    $scope.empFName = "";
    $scope.empLName = "";
    $scope.empNum = 0;
    $scope.empTitle = "";
    $scope.empSal = 0;
}

function pushArray($scope, i) {
    var first = $scope.empFName;
    var last = $scope.empLName;
    var num = $scope.empNum;
    var title = $scope.empTitle;
    var sal = $scope.empSal;
    var monTotal = 0;
    var arrayNum = i;
    if (i == 0) {
        prepPush($scope, first, last, num, title, sal, monTotal, arrayNum);
    } else {
        prepPush($scope, first, last, num, title, sal, monTotal, arrayNum);
        $scope.summary[0].monTotal += $scope.summary[arrayNum].monTotal;
    }
}

function prepPush($scope, first, last, num, title, sal, monTotal, arrayNum) {
    monTotal = (sal / 12);
    console.log(monTotal);
    $scope.summary.push({
        first: first,
        last: last,
        num: num,
        title: title,
        sal: sal,
        monTotal: monTotal,
        arrayNum: arrayNum
    });
    setBlank($scope);
    console.log("Summary: ", $scope.summary);
}
