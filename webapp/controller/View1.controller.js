sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("de.varelmann.zestnw.ZTEST_NORTHWIND.controller.View1", {
		onInit: function () {
			var oModel = new sap.ui.model.json.JSONModel();
			var that = this;
			var aData = jQuery.ajax({
				type: "GET",
				contentType: "application/json",
				url: "/Northwind_Service/V2/Northwind/Northwind.svc/Customers",
				dataType: "json",
				async: false,
				success: function (data, textStatus, jqXHR) {
					oModel.setData(data);
					alert("success to post");
				},
				error: function (data) {
					alert(data);
				}
			});
			this.getView().setModel(oModel);
		}
	});
});