window.addEventListener('load',function () {
	// body...
	var text ='Tôi học javascript';
	var i;
	var n =500;
	var result ='';
	for(i=1;i<=n;i++){
		result += i+'.'+text+'<br/>' ;
		document.getElementById('result').innerHTML = result;
	}

})