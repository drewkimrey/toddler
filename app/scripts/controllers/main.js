var toddlerApp = angular.module('toddlerApp', []);
function shuffle(array) {
    var currentIndex = array.length
        , temporaryValue
        , randomIndex
        ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

toddlerApp.controller('toddlerController',function($scope){
    function createCombinedNames(fn, mn, ln){
        var allNames =[];
        for (var i = fn.length - 1; i >= 0; i--) {
            var firstName = fn[i];
            for (var j = mn.length - 1; j >= 0; j--) {
                var middleName = mn[j];
                if (firstName !== middleName){
                    allNames.push({
                        first: firstName,
                        middle: middleName
                    });
                }
            };
        };
        return shuffle(allNames);
    }
    $scope.firstNames = [
        'Fisher', 'Hunter', 'Aca', 'Scott', 'River'
    ];
    $scope.middleNames = [
        'Fisher','Warren','Jernigan','Melroy'
    ];
    $scope.combinedNames = createCombinedNames($scope.firstNames, $scope.middleNames, $scope.lastNames);
    function renderCombinedNames(){
        $scope.combinedNames = createCombinedNames($scope.firstNames, $scope.middleNames, $scope.lastNames);
    }
    $scope.setSearchFilter = function(){
        $scope.searchFilter = {};
        $scope.searchFilter[$scope.searchOn] = $scope.userQuery;
    };
    
    $scope.addFirstName = function(){
        if ($scope.firstName !== ""){
            $scope.firstNames.push($scope.firstName);
            $scope.firstName = "";
            renderCombinedNames();
        }
    };
    $scope.removeFirstName = function(item){
        var index=$scope.firstNames.indexOf(item)
        $scope.firstNames.splice(index,1);
        renderCombinedNames();
    };
    $scope.addMiddleName = function(){
        if ($scope.middleName !== ""){
            $scope.middleNames.push($scope.middleName);
            $scope.middleName = "";
            renderCombinedNames();
        }
    };
    $scope.removeMiddleName = function(item){
        var index=$scope.middleNames.indexOf(item)
        $scope.middleNames.splice(index,1);
        renderCombinedNames();
    };
    $scope.addLastName = function(){
        if ($scope.lastName !== ""){
            $scope.lastNames.push($scope.lastName);
            $scope.lastName = "";
            renderCombinedNames();
        }
    };
});