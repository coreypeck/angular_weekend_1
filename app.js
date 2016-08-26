var myApp = angular.module("myApp", []);

myApp.controller("empController", ["$scope", function($scope) {
    console.log("I'm working!");
    var i = 0;
    setBlank($scope);
    $scope.summary = [];
    $scope.salaryTotal = 0;
    $scope.getEmp = function() {
        sendEmp($scope, i);
        i++;
    }
    $scope.delEmp = function(id) {
        console.log(id);
        $scope.salaryTotal -= $scope.summary[id].newEmp.monSal;
        $scope.summary.splice(id, 1);
        i--;
        //   empHolder = [];
        //   i--;
        //   var counter=0;
        //   $scope.summary.forEach(function(worker) {
        //     console.log("id",id);
        //     console.log("worker",worker.newEmp.arrayNum);
        //
        //     if(worker.newEmp.arrayNum == id){
        //       if($scope.summary.length == 1){
        //         var myEl = angular.element( document.querySelector( '#container' ) );
        //         $scope.summary = [];
        //         myEl.empty();
        //       }
        //       return;
        //     }
        //     else{
        //       var currentSummary = [];
        //       console.log("Worker",worker);
        //       console.log("Current before math", currentSummary);
        //       worker.newEmp.arrayNum = counter;
        //       console.log("Worker",worker);
        //       worker.newEmp.monTotal = (worker.newEmp.monTotal - worker.newEmp.monSal);
        //       console.log("Worker",worker);
        //       currentSummary.push(worker);
        //       empHolder.push(worker);
        //       // currentSummary[counter].empNum.arrayNum = counter;
        //       console.log("Current after math", currentSummary);
        //       // currentSummary.shift();
        //       prepPush($scope, currentSummary);
        //       counter++;
        //     }
        //   });
        // }
    }
}]);

function sendEmp($scope, i) {
    if ($scope.empFName == "" || $scope.empLName == "" || $scope.empNum == 0 || $scope.empTitle == "") {
        console.log("Make sure you have all fields filled out and all number values aren't 0");
        return;
    } else {
        // var myEl = angular.element( document.querySelector( '#container' ) );
        // myEl.empty();
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
    var newEmp = new Employee($scope, i);
    console.log(newEmp)
    if (i == 0) {
        prepPush($scope, newEmp);
    } else {
        prepPush($scope, newEmp);
        console.log("Scope before monTotal added", $scope.summary);
        $scope.salaryTotal += $scope.summary[i].newEmp.monTotal;
    }
}

function Employee($scope, i) {
    this.first = $scope.empFName;
    this.last = $scope.empLName;
    this.num = $scope.empNum;
    this.title = $scope.empTitle;
    this.sal = $scope.empSal;
    this.monSal = ($scope.empSal / 12);
    this.monTotal = 0;
}

function prepPush($scope, newEmp) {

    newEmp.monTotal = (newEmp.monSal);
    console.log(newEmp.monTotal);
    $scope.summary.push({
        newEmp
    });
    console.log("scope.summary", $scope.summary);
    setBlank($scope);
}
