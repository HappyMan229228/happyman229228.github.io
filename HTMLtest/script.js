function getName() {
	let name = prompt("Введите свое имя...");
	if (name == "Илья") {
		alert ("Вы провалили тест.Вы набрали 0 баллов");
		alert (name + ", вы набрали " + score + "/" + questions.length + " баллов.");
	}

	if (name == "" || name == null) {
		name = "Ученик";
	}
	alert(name + ", нажми ОК чтобы начать тест.");
	return name;
}

function test() {
	const name = getName();

	const questions = ["Что такое HTML и как это расшифровывается?",
	"Что такое Doctype? и что это означает?", 
	"Название стандартного блочного элемента?",
	 "Название стандартного строчного элемента?",
	 "Чем отличается span от div",
	 "Значение display, при котором все элементы распологаютя последовательно на одной и той же сторке?",
	 "Значения justify-content, при котором все элементы выравниваются по центру?",
	 "Значения justify-content, при котором все элементы выравниваются по относительно осевой линии?",
	 "Что такое элемент datalist в HTML5?",
	 "Какой элемент используется для проверки url?",
	 "Какой элемент отображает поле для ввода чисел?",
	 "Что такое output в НTML5?",
	 "Что такое SVG в HTML5"];
	const answers =["HTML-зык гипертекстовой разметки(HyperText Markup Language)",
	"Doctype-это определение типа документа(Document Type Definition(DTD)",
	"span-это линейный контейнер",
	 "div", "block", "inline", "ctnter", "baseline",
	 "Элемент datalist помогает реализовать автозаполнение в поле для ввода текста",
	 "url","number","output выводит сумму двух введеных чисел в виде текста",
	 "SVG-масштабируемая векторная графика"];

	let score = 0;
	for(let i = 0; i < questions.length; i++) {
		let q = questions[i];
		let a = answers[i];
		let otvet = prompt("Вопрос №" + (i+1) + ": " +q);

		if (otvet == a) {
			score ++;
		}
	}

	alert (name + ", вы набрали " + score + "/" + questions.length + " баллов.");
}