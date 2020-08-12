function Hienthi() {
	// body...
	var t = document.getElementById('t1').value;
	var a = document.getElementById('a1').value;
	var r = document.getElementById('r1').value;
	var k = document.getElementById('k1').value;
	var S = "Title: "+t +"<br> Author: "+a +"<br> Release date: "+r +"<br> Keywords: "+k;
	var element = document.getElementById('div1');
	element.insertAdjacentHTML('afterend', S);
	event.preventDefault()
}