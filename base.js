	var centerx = window.innerWidth / 2;
	var centery = window.innerHeight / 2;
	var timeA = time1 = time2 = time3 = time4 = time5 = time5 = time6 = time7 = 0;
	var timeout = false;

	function travel(star, time, r) {
		if (time == timeA) {
			timeA += 0.1;
		} else if (time == time1) {
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
		} else {
			time7 += 0.1;
		}
		var rad = (2 * Math.PI / 360) * 6 * time;
		var waterx = centerx + Math.sin(rad) * r;
		var watery = centery - Math.cos(rad) * r;
		$("." + star).css({
			"left": waterx + 'px',
			"top": watery + 'px'
		}).mouseover(function() {
			timeout = true;
		}).mouseout(function() {
			timeout = false;
		});
	}
	setInterval(function() {
		if (timeout) return;
		travel("water", timeA, 70)
	}, 1);
	setInterval(function() {
		if (timeout) return;
		travel("gold", time1, 110)
	}, 5);
	setInterval(function() {
		if (timeout) return;
		travel("earth", time2, 160)
	}, 10);
	setInterval(function() {
		if (timeout) return;
		travel("fire", time3, 200)
	}, 15);
	setInterval(function() {
		if (timeout) return;
		travel("jupiter", time4, 260)
	}, 15);
	setInterval(function() {
		if (timeout) return;
		travel("soil", time5, 340)
	}, 20);
	setInterval(function() {
		if (timeout) return;
		travel("uranus", time6, 410)
	}, 25);
	setInterval(function() {
		if (timeout) return;
		travel("neptune", time7, 470)
	}, 30);
