var h, m, s;

function setup() {
	createCanvas(800, 800);
}

function draw() {
	background(23, 12, 89);

	// get time values
	h = hour();
	m = minute();
	s = second();

	// draw elements
	// eyes are seconds, rays are minutes, planets are hours
	push();
	stroke(0);
	strokeWeight(1.5);
	head();
	lEye();
	rEye();
	pop();
	noStroke();
	mouth();
	planets(400, 400);
	rays(400, 400);
}

function mouth() {
	fill(209, 79, 15);
	arc(410, 465, 50, 70, 0, PI, CHORD);
}

function lEye() {
	fill(255);
	ellipse(335, 425, 95, 35);
	let lPupil = map(s, 0, 59, 295, 375);
	fill(0);
	ellipse(lPupil, 425, 15, 15);
}

function rEye() {
	fill(255);
	ellipse(485, 425, 95, 35);
	let rPupil = map(s, 0, 59, 445, 525);
	fill(0);
	ellipse(rPupil, 425, 15, 15);
}

function head() {
	fill(245, 213, 73);
	circle(400, 400, 300);
}

function planets(a, b) {
	translate(a, b);
	scale(1.5);
	var planetRadius = 200;
	var planetAngle = radians(360/12);
	var planetCount = 0;
	if (h > 12) {
		h = h - 12;
	}
	for (let i = 0; i < radians(360); i += planetAngle) {
		var x = planetRadius * sin(i);
		var y = planetRadius * cos(i);
		if (planetCount < h) {
			push();
			stroke(255);
			fill(142, 212, 250);
			circle(x, y, 25);
			pop();
		}
		else if (planetCount >= h) {
			push();
			noFill();
			stroke(255);
			circle(x, y, 25);
			pop();
		}
		planetCount++;
	}
}


function rays() {
	for (let i = 0; i < m; i++) {
		if (i <= m) {
			stroke(209, 79, 15);
			rotate(radians(6));
			strokeWeight(3);
			line(0, -145, 0, -110);
		}
	}
}

