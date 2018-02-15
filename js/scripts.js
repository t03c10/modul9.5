document.getElementsByClassName;
var buttons = document.getElementsByClassName('button');

//console.log(buttons);

console.log(buttons.length);
for (var i = 0; i < buttons.length; i++) {
	console.log(buttons[i].innerText + '\n');
	buttons[i].innerText = 'Witam ' + i;
	console.log(buttons[i].innerText + '\n');
}