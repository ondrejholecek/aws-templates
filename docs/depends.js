function depends_setup() {
	// because multiple items can depend on one checkbox,
	// we want to filter it a little so the handler on the
	// checkbox change is called only once.

	let all = [];
	$('[data-depends]').each(function (index, element) {
		let e = $(element);
		e.parents('table').first().find('input[type=checkbox][name='+e.attr("data-depends")+']').each(function (i, p) {
			if (all.includes(p)) return;
			all.push(p);
		});
	});

	for (let one of all) {
		$(one).change(depends_change);
	}
}

function depends_change() {
	let controller = $(this);
	let table = controller.parents('table').first();
	table.find('[data-depends='+controller.attr("name")+']').each(function (index, element) {
		//console.log(table.attr("id"), element);
		let row = $(element).parents('tr').first();
		if (controller.is(':checked')) {
			row.show(500);
		} else {
			row.hide(500);
		}
	});
}
