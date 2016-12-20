(function() {
  'use strict';

  angular
    .module('app')
    .directive('kurseviPane', kurseviPane);
  
  function kurseviPane() {
    var kurseviPaneDirective = {
      //koristimo kontroler kursevi-tabs direktive
      require: '^kurseviTabs',
      restrict: 'E',
      transclude: true,
      scope: {
        title: '@'
      },
      link: function(scope, element, attrs, kurseviTabsController) {
        //kad se formira nova instanca kursevi-pane direktive dodaje se u listu tabova u kursevi-tabs putem kontrolera te direktive
        kurseviTabsController.addPane(scope);
      },
      //biće prikazana (ng-show) samo ako je selektovana, i prikazuje putem transclude ono što je navedeno unutar HTMLa u index.html
      template: '<div class="tab-pane" ng-show="selected" ng-transclude></div>'
    };
    return kurseviPaneDirective;
  }
})();
