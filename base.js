	var centerx = window.innerWidth / 2;
	var centery = window.innerHeight / 2;
	var time1 = time2 = time3 = time4 = time5 = time5 = time6 = time7 =time8= 0;
	var timeout = false;

	function travel(star, time, r) {
		if (time == time1) {
			time1 += 0.1;
		} else if (time == time2) {
			time2 += 0.1;
		} else if (time == time3) {
			time3 += 0.1;
		} else if (time == time4) {
			time4 += 0.1;
		} else if (time == time5) {
			time5 += 0.1;
		} else if (time == time6) {
			time6 += 0.1;
		} else if (time == time7) {
			time7 += 0.1;
		} else {
			time8 += 0.1;
		}
		var rad = (2 * Math.PI / 360) * 6 * time;
		var x = centerx + Math.sin(rad) * r;
		var y = centery - Math.cos(rad) * r;
		$("." + star).css({
			"left": x + 'px',
			"top": y + 'px'
		}).mouseover(function() {
			timeout = true;
			$("span" + "." + star+"-t").prop('hidden', false);
		}).mouseout(function() {
			timeout = false;
			$("span" + "." + star+"-t").prop('hidden', true);
		});
		$(".sun").mousemove(function(event) {
			$("span.sun-t").prop('hidden', false);
		}).mouseout(function(event) {
			$("span.sun-t").prop('hidden', true);
		});

	}
	setInterval(function() {
		if (timeout) return;
		travel("water", time1, 70)
	}, 4.5);
	setInterval(function() {
		if (timeout) return;
		travel("gold", time2, 110)
	}, 45);
	setInterval(function() {
		if (timeout) return;
		travel("earth", time3, 160)
	}, 30);
	setInterval(function() {
		if (timeout) return;
		travel("fire", time4, 200)
	}, 60);
	setInterval(function() {
		if (timeout) return;
		travel("jupiter", time5, 260)
	}, 360);
	setInterval(function() {
		if (timeout) return;
		travel("soil", time6, 340)
	}, 900);
	setInterval(function() {
		if (timeout) return;
		travel("uranus", time7, 410)
	}, 2520);
	setInterval(function() {
		if (timeout) return;
		travel("neptune", time8, 470)
	}, 4820);
