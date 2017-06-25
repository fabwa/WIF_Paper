var qrcode = new QRCode("qrcode1");
var qrcode2 = new QRCode("qrcode2");

function makeCode () {		
	var wifText = document.getElementById("wif");
  var publicText = document.getElementById("public");
	
	if (!wifText.value) {
		alert("Input WIF");
		wifText.focus();
    wifText.value = "YOUR_WIF_HERE";
		return;
	}
  
  	if (!publicText.value) {
		alert("Input public address");
		publicText.focus();
    publicText.value = "YOUR_PUBLIC_ADDRESS_HERE";
		return;
	}
	
	qrcode.makeCode(wifText.value);
  qrcode2.makeCode(publicText.value);
}

makeCode();

$("#wif").
	on("blur", function () {
		makeCode();
	}).
	on("keydown", function (e) {
		if (e.keyCode == 13) {
			makeCode();
		}
	});

$("#public").
	on("blur", function () {
		makeCode();
	}).
	on("keydown", function (e) {
		if (e.keyCode == 13) {
			makeCode();
		}
	});