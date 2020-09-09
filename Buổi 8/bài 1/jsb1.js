function Hienthi() {
	// body...
	var ten = document.getElementById('ip1').value;
	var tuoi = document.getElementById('ip2').value;
	var string = "Tên của bạn là: " + ten + " <br> Tuổi của bạn là: " + tuoi;
	document.getElementById('dis').innerHTML = string;
	event.preventDefault();
	// element= document.getElementById("dis");
	// element.insertAdjacentHTML('afterend', string);
	// event.preventDefault();
}
function hienthiten(a) {
	// body...
	var ten = a.value;
	var string = "Tên bạn của bạn là: " +ten;
	var element= document.getElementById('dis');
	element.insertAdjacentHTML("afterend ", string);
}