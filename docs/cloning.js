function cloning_setup() {
	$('[data-clone]').each(function (index, original) {
		clone = $(original).clone();
		clone.attr("id", $(original).attr("data-clone"));
		clone.insertAfter(original);

		let change = $(original).attr("data-set");
		if (change) {
			for (let field of change.split(";")) {
				let data = field.split(":", 2);
				if (data.length != 2) {
					console.error("Cannot split data-set field \"" + field + "\". Element: ", original);
					continue;
				}
	
				let e = clone.find('[name='+data[0]+']');
				if (!e) {
					console.error("Cannot find sub-element name \"" + data[0] + "\". Element: ", original);
					continue;
				}
	
				e.val(data[1]);
			}
		}
	});
}
