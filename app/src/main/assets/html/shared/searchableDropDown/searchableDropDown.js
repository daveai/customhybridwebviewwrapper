app.directive('searchableDropDown', function() {
  return {
    templateUrl: 'shared/searchableDropDown/views/searchableDropDown.html',
    controller: function($scope, $element){
    	$scope.issdcOpen = false;
    	$scope.toggleExpand = function(){
    		if ($scope.issdcOpen) {
    			$(".searchable-dropdown-content").removeClass("searchable-dropdown-content-expand");    			
    		} else {
    			$(".searchable-dropdown-content").addClass("searchable-dropdown-content-expand");
    		}
    		$scope.issdcOpen = !$scope.issdcOpen;
    		console.log("Hello");
        }
        $scope.setLanguage = function(lan, $event){
        	$("#selectedLanguage").text($($event.target).text());
        	$(".searchable-dropdown-content").removeClass("searchable-dropdown-content-expand");
        }
    }
  };
});