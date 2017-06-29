	var centerx = window.innerWidth / 2;
	var centery = window.innerHeight / 2;
	var timeA = time1 = time2 = time3 = time4 = time5 = time5 = time6 = time7 = 0;

	function name(nameIn, time, r) {
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
		$("." + nameIn).css({
			"left": waterx + 'px',
			"top": watery + 'px'
		})

	}
	setInterval(function() { name("water", timeA, 70) }, 1);
	setInterval(function() { name("gold", time1, 110) }, 5);
	setInterval(function() { name("earth", time2, 160) }, 10);
	setInterval(function() { name("fire", time3, 200) }, 15);
	setInterval(function() { name("jupiter", time4, 260) }, 15);
	setInterval(function() { name("soil", time5, 340) }, 20);
	setInterval(function() { name("uranus", time6, 410) }, 25);
	setInterval(function() { name("neptune", time7, 470) }, 30);
