/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"de/varelmann/zestnw/ZTEST_NORTHWIND/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});