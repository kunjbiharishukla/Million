jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/sap/mill/Million/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/sap/mill/Million/test/integration/pages/App",
	"com/sap/mill/Million/test/integration/pages/Browser",
	"com/sap/mill/Million/test/integration/pages/Master",
	"com/sap/mill/Million/test/integration/pages/Detail",
	"com/sap/mill/Million/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.sap.mill.Million.view."
	});

	sap.ui.require([
		"com/sap/mill/Million/test/integration/NavigationJourneyPhone",
		"com/sap/mill/Million/test/integration/NotFoundJourneyPhone",
		"com/sap/mill/Million/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});