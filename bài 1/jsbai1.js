
function Hienthi() {
	var ten = document.getElementById('ip1').value;
	var tuoi = document.getElementById('ip2').value;
	var str = "Ten vua nhap vao : " + ten + "<br> Tuoi vua nhap vao " + tuoi;
	 element=document.getElementById('dis');
	element.insertAdjacentHTML( 'afterend', str )
	event.preventDefault();
}

function hienthiten(a){
	 ten = a.value;
 	 string = "Ten cua ban la : " + ten;
	// $("#dis").empty();
	// $("#dis").html(string)
	hi = document.getElementById('dis');
	hi.insertAdjacentHTML('afterend',string);
}
// function hienthituoi(t) {
// 	// body...
// 	var tuoi=t.value;
// 	var age = " <br> Tuoi cua ban la: " + tuoi;
// 	a = document.getElementById('dis');
// 	a.insertAdjacentHTML('afterend',age);
// }
