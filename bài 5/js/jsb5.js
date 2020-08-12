var obj_hover = document.getElementById('mn2');
obj_hover.addEventListener('mouseover',function hoverr(){
	document.getElementById('mn2').style.background= 'blue';
	document.getElementById('mn2').style.border = '1px solid blue';
})
obj_hover.addEventListener('mouseout',function hoverr() {
	// body...
	document.getElementById('mn2').style.background = '#DC3545';
	document.getElementById('mn2').style.border = '1px solid #DC3545';
})