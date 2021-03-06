﻿import { customElement, inject } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";
import { MDCSnackbar } from "@material/snackbar/dist/mdc.snackbar.min";

@customElement("mdc-snackbar")
@inject(Element, EventAggregator)
export class MdcSnackbar {
	constructor(element, ea) {
		this.element = element;
		this.ea = ea;
	}

	attached() {
		this.subscriber = this.ea.subscribe("PostMessage.Snackbar", response => {
			this.showSnackbar(
				response.label,
				response.buttonlabel,
				response.dismissonaction
			);
		});
	}

	detached() {
		this.subscripter.dispose();
	}

	showSnackbar(label, buttonLabel = "Cancel", dismissOnAction = true) {
		this.mdcSnackbar = new MDCSnackbar(this.element);

		this.mdcSnackbar.dismissesOnAction = dismissOnAction;

		const data = {
			message: label,
			timout: 2750,
			actionText: buttonLabel
		};
		data.actionHandler = function() {};

		this.mdcSnackbar.show(data);
	}
}
