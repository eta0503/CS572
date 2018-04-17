(function() {
	function qwe(cb) {
		return cb + 1;
	}

	const result =  qwe(function() {
		function asd(cb) {
			return cb + 0;
		}
		const param = asd(function() {
			return 2;
		});
		return param + 1;
	});

	console.log(result);
})