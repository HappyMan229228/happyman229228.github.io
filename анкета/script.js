let imgSrc = "";

function readURL(input) {
	if (input.files && input.files[0]) {
		let reader = new FileReader();

		reader.onload = function (e) {
			imgSrc = e.target.result;
		}

		reader.readAsDataURL(input.files[0]);
	}
}


function getForm() {
	calcAge()
	// Залить фон цветом, который выберет пользователь
	let color = $('#color').val();
 	let s_name = $('#surname').val();
 	let name = $('#name').val();
 	let m_name = $('#m_name').val();
 	let email = $('#email').val();
 	let phone = $('#phone').val();
 	let vk = $('#vk').val();
 	let inst = $('#instagtam').val();
 	let age = calcAge();
 	//Узнаем пол
 	let gender = $('input[name="gender"]:checked')[0].id;
 	if (gender == 'gender1') {
 		gender='Мужской'
 	}
 	else if (gender == 'gender2') {
 		gender='Женский'
 	}
 	else gender='Другой'
 	}
 	const city = $('#city>option:selected').text()
 	const about = $('#about').val()
 	let games = getGames()


 	$('form').remove();
 	$('body').append('<main>');
 	let main = $('main');
 	main.append('<h2 class="polz">Фамилия:' +s_name + ' </h2>\n')
 	main.append('<h2 class="polz">Имя:' +name + ' </h2>')
 	if (m_name.length > 0 ) {
 		 	$('body').append('<h2 class="polz">Отчество:' +m_name + ' </h2>')
 	}
 	main.append('<h2 class="polz">Email:' +email + ' </h2>')
 	main.append('<h2 class="polz">Телефон:' +phone + ' </h2>')
 	main.append('<h2 class="polz">Возраст:' +age + ' </h2>')
 	main.append('<h2 class="polz">ВК:' +vk + ' </h2>')
 	main.append('<h2 class="polz">Инстаграм:' +inst + ' </h2>')
 	$('h1').attr('class', 'red')
 	main.append('<img src="' +imgSrc+ '"</img>')
 	$('img').css({
 		border: '4px solid',
 		borderColor: color
 	});

function getFilms() {
		let films = [];
		$('input[type="checkbox"]:checked').each(function() {
			films.push($(this)[0].id);
		});

		return films
}

function calcAge() {
	let str = $('#age').val();
	
	let arr = str.split('-')
	let year = +arr[0];
	let month = +arr[1];
	let date = +arr[2];

	let now = new Date();
	// now.getFullYear() - текущий год
	// now.getMonth() - текущий месяц (месяц считаются с нуля)
	// now.getDate() - текущая дата 
	let god = now.getFullYear() - year;
	if (now.getMonth()+1 < month) {
		god-=1 
	}
	else if (now.getMonth()+1==month) {
		if (now.getDate()+1 < date) {
			god-=1
		}
	}
	if (!god) god = 0
	
	return god;
}

window.onload = function(){
	let now = new Date();
	let year = now.getFullYear();
	let month = now.getMonth() + 1;
	let date = now.getDate();

	if (month < 10) {
		month = '0' + month;
	}
	if (date < 10) {
		date = '0' + date;
	}

	let max = year + '-' + month + '-' + date;
	$('#age').attr('max', max);
}

function black(){
	$('body').css('backgroundColor','black')
	$('body').css('color','white')
}
function white(){
	$('body').css('backgroundColor','white')
	$('body').css('color','black')
}
