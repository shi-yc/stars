	var centerx = window.innerWidth / 2;
	var centery = window.innerHeight / 2;
	var timeout = false;
	var baseTime = 20;
	var yearTime = 20 * 1000;
	var message = [
		{ name: "sun" },
		{ name: "water", time: 0.15, radius: 70 },
		{ name: "gold", time: 1.5, radius: 110 },
		{ name: "earth", time: 1, radius: 160 },
		{ name: "fire", time: 2, radius: 200 },
		{ name: "jupiter", time: 12, radius: 260 },
		{ name: "soil", time: 30, radius: 340 },
		{ name: "neptune", time: 84, radius: 410 },
		{ name: "uranus", time: 164, radius: 470 }
	];

	function travel(star, time, r) {
		var disTime = Number($("." + star).attr('data-time'));
		var rad = (2 * Math.PI) / (time * yearTime / baseTime);
		rad += disTime;
		$("." + star).attr('data-time', rad);
		var x = centerx + Math.sin(rad) * r;
		var y = centery - Math.cos(rad) * r;
		$("." + star).css({
			"left": x + "px",
			"top": y + 'px'
		});

	}

	function mouseOver(names) {
		timeout = true;
		$("span" + "." + names).prop('hidden', false);
	}

	function mouseOut(names) {
		timeout = false;
		$("span" + "." + names).prop('hidden', true);
	}
	setInterval(function() {
		if (timeout) return;
		for (var i = 1; i < message.length; i++) {
			travel(message[i].name, message[i].time, message[i].radius);
		};
	}, baseTime);
	for (var i = 0; i < message.length; i++) {
		(function(i) {
			$("." + message[i].name).mousemove(function() { mouseOver(message[i].name + "-t") }).mouseout(function() { mouseOut(message[i].name + "-t") });
		})(i);
	};
