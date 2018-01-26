var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName ()
{
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'meBank is cool '+ myName;
}
if(!localStorage.getItem('name'))
	{
		setUserName();
	}
else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'meBank is cool ' + storedName;
}
myButton.onclick = function ()
{
	setUserName();
}