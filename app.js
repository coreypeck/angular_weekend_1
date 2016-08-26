var myApp = angular.module("myApp", []);

myApp.controller("empController", ["$scope", function($scope) {
    console.log("I'm working!");
    var i = 0;
    setBlank($scope);
    $scope.summary = [{}];
    var currentSummary = [{}];
    $scope.getEmp = function() {
        sendEmp($scope, i);
        i++;
    }
    $scope.delEmp = function(id, empSal) {
      i--;
      var counter=0;
      $scope.summary.forEach(function(worker) {
        $scope.summary = [{}];
        currentSummary = [{}];
        console.log("id",id);
        console.log("worker",worker.arrayNum);
        if(worker.arrayNum == id){
          return;
        }
        else{
          currentSummary.push(worker);
          currentSummary[counter].arrayNum = counter;
          currentSummary.shift();
          $scope.summary = currentSummary;
          console.log(currentSummary);
          console.log($scope.summary);
          prepPush($scope, currentSummary[counter].first,currentSummary[counter].last,currentSummary[counter].num,currentSummary[counter].title,currentSummary[counter].sal,currentSummary[counter].monTotal,currentSummary[counter].arrayNum);
          counter++;
        }
      });
    }
}]);

var monthlySalary = 0;

function sendEmp($scope, i) {
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
}
