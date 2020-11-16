var switch_device_id = 1;

function switch_device_setup() {
	$('div[data-generate=switch-device]').each(function (index, element) {
		let newElement = switch_device_generate();
		newElement.attr("class", $(element).attr("class"));
		$(element).replaceWith(newElement);
		$('div#'+newElement.attr("id")).find("input[type=radio]").each(function (index, radio) {
			$(radio).change(switch_device_change);
		});
	});
}

function switch_device_current_suffix() {
	let radio = $('input[data-type=deviceSelector]:checked').first();
	let value = radio.attr("value");

	if (value == 1) {
		return ["first", "second"];
	} else if (value == 2) {
		return ["second", "first"];
	} else {
		console.error("Unable to determine current switch device.", radio);
		return "";
	}
}

function switch_device_change() {
	let device = $(this).val();

	// display the right element from the pair
	$('[data-switch=device-specific]').each(function (index, element) {
		let e = $(element);
		let eid = e.attr("id");

		// validate the condition
		// if it doesn't match do not change the visibility status
		let condition = $(element).attr("data-switch-condition");
		if (condition) {
			let [name, value] = condition.split(":", 2);
			let currentValue = $('input[type=radio][name=' + name + ']:checked').first();
			if (currentValue.val() != value) {
				return;
			}
		}

		// 
		if (eid.endsWith("-first")) {
			if (device == 1) {
				e.show();
			} else {
				e.hide();
			}
		} else if (eid.endsWith("-second")) {
			if (device == 2) {
				e.show();
			} else {
				e.hide();
			}
		}
	});

	// switch the state of all device selectors
	$('input[data-type=deviceSelector]').each(function(index, element) {
		if ($(element).val() == device) {
			$(element).prop("checked", true);
		} else {
			$(element).prop("checked", false);
		}
	});
}

function switch_device_generate() {
	let radio1 = $(document.createElement("INPUT"));
	radio1.attr("type", "radio");	
	radio1.attr("id", "switch-device-device-" + switch_device_id + "-1");
	radio1.attr("name", "switch-device-device-" + switch_device_id);
	radio1.attr("data-type", "deviceSelector");
	radio1.attr("value", "1");
	radio1.prop("checked", true);

	let radio1label = $(document.createElement("LABEL"));
	radio1label.attr("for", "switch-device-device-" + switch_device_id + "-1");
	radio1label.text("First FortiGate");

	let radio2 = $(document.createElement("INPUT"));
	radio2.attr("type", "radio");	
	radio2.attr("id", "switch-device-device-" + switch_device_id + "-2");
	radio2.attr("name", "switch-device-device-" + switch_device_id);
	radio2.attr("data-type", "deviceSelector");
	radio2.attr("value", "2");
	radio2.prop("checked", false);

	let radio2label = $(document.createElement("LABEL"));
	radio2label.attr("for", "switch-device-device-" + switch_device_id + "-2");
	radio2label.text("Second FortiGate");

	let div = $(document.createElement("DIV"));
	div.attr("name", "select-device");
	div.attr("id", "select-device-" + switch_device_id);
	div.append(radio1);
	div.append(radio1label);
	div.append(radio2);
	div.append(radio2label);

	switch_device_id++;
	return div;
}
