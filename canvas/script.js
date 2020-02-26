window.onload = function() {
	let canv = $('#myCanvas');

	//Прямоугольник
	canv.drawRect({
		// Стиль обводки
		strokeStyle: 'steelblue',
		// Стиль заливки
		fillStyle: 'dodgerblue',
		// Ширина обводки
		strokeWidth: 4,
		// Перенос ключевой точки тз центра в левый верхний угол
		fromCenter: false,
		x: 10, y: 10,
		width: 200,
		height: 200
	});

	// Дуги и окружности 
	canv.drawArc({
		// Стиль обводки
		strokeStyle: 'red',
		// Стиль заливки
		fillStyle: 'yellow',
		// Ширина обводки
		strokeWidth: 4,
		// Перенос ключевой точки тз центра в левый верхний угол
		x: 350, y: 110,
		radius: 100,
		cloded: true
	});

	// Линии
		canv.drawLine({
		// Стиль обводки
		strokeStyle: 'green',
		// Стиль заливки
		fillStyle: 'yellow',
		// Ширина обводки
		strokeWidth: 10,
		// Закругленные концы
		rounded: true,
		x1: 10, y1: 400,
		x2: 100, y2: 230,
		x3: 250, y3: 400,
		// Замкнутый контур
		closed: true,
	});
}