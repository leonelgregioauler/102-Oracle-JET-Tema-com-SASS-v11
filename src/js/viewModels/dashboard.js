/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define([
  "accUtils",
  "ojs/ojcore",
  "knockout",
  "jquery",
  "appController",
  "ojs/ojknockout",
  "ojs/ojbutton",
  "ojs/ojdialog",
  "ojs/ojpopup",
  "ojs/ojrouter"
], 
function (accUtils, oj, ko, $, app) {
    function DashboardViewModel() {
      var self = this;
      self.theme = {};
      self.themeTargetPlatform = oj.ThemeUtils.getThemeTargetPlatform();
      self.theme.baseTheme = ko.observable("alta");
      self.theme.demoTheme = ko.observable("none");

      self.theme.demoTheme.subscribe(function (valor) {
        self.theme.demoTheme(valor);
        //saveThemeSettings();
        sessionStorage.setItem(
          jetThemeSettingsSessionStorageName,
          JSON.stringify({
            baseTheme: self.theme.baseTheme(),
            demoTheme: self.theme.demoTheme(),
          })
        );
        window.location.reload();
      });

      self.connected = function() {
        accUtils.announce('Dashboard page loaded.', 'assertive');
        document.title = "Dashboard";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return DashboardViewModel;
  }
);
