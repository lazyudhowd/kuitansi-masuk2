function downloadPdf(){
	setLocaleZakatSedekahLainnya()
	let ourpdf = makepdf();

	let currentDate = new Date();

	formValueGetter(formKwitansi.nama).split(" ")[0].toLowerCase()

	let nameFile = currentDate.getFullYear();
	nameFile += (currentDate.getMonth()+1).toString().padStart(2,"0");
	nameFile += currentDate.getDate().toString().padStart(2,"0")+"_";
	nameFile += currentDate.getHours().toString().padStart(2,"0");
	nameFile += currentDate.getSeconds().toString().padStart(2,"0");
	nameFile += currentDate.getMinutes().toString().padStart(2,"0")+"_";
	nameFile += formValueGetter(formKwitansi.nama).split(" ")[0].toLowerCase()
	nameFile += ".pdf";

	ourpdf.save(nameFile);
}

function previewPdf(){
	setLocaleZakatSedekahLainnya()
	let ourpdf = makepdf()

	let embedTarget = document.getElementById("iframepdf");
	embedTarget.frameborder = 0;
	embedTarget.style.width="100%";
	embedTarget.style.height="500px";
	embedTarget.src = ourpdf.output("datauristring");
	embedTarget.style.display = "block"
}

function lazDateTimeFormater4(eValue){
	// untuk format di kwitansi dengan output : 24-05-2024
	let formatedDate = eValue.getDate().toString().padStart(2,"0")+"-";
	formatedDate += (eValue.getMonth()+1).toString().padStart(2,"0")+"-";
	formatedDate += eValue.getFullYear();

	return formatedDate;
}

function formValueGetter(fFormObject){
	console.log("formValueGetter");
	console.log(fFormObject);
	if(fFormObject.type == "text"){
		let formObject = document.getElementById(fFormObject.id);
		console.log(formObject)
		return formObject.value;
	} else if(fFormObject.type == "datetime"){
		let formObject = document.getElementById(fFormObject.id);
		console.log(formObject.value);
		return lazDateTimeFormater4(new Date(formObject.value));
	}

	return "Nothing Selected"
}

function setCap(){
	// var file = document.querySelector('input[type=file]')['files'][0];
	// var reader = new FileReader();
	// var baseString;
	// reader.onloadend = function () {
	// 	baseString = reader.result;
	// 	console.log(baseString); 
	// };
	// reader.readAsDataURL(file);
	console.log(this.id);
	let filesData = this.files[0];
	let ourFileReader = new FileReader();

	ourFileReader.onload = function(e){
		let isImage = false;
		let stringToBlob = e.target.result;
		for(let aarep=0; aarep<preffixBlobCollection.length; aarep++){
			stringToBlob = stringToBlob.replace(preffixBlobCollection[aarep],"");
		}

		for(let abrep=0; abrep<regexImage.length; abrep++){
			isImage = regexImage[abrep].test(stringToBlob);
				if(isImage){
					break;
			}
		}

		if(isImage){
			uploadTtd.penyetor = stringToBlob;
			console.log(uploadTtd);

	} else {
		  console.log("can't converted");
		}
	}

	ourFileReader.readAsDataURL(this.files[0]);
}

function setUploadScanFotoKwitansi(){
	console.log(this.id);
	let filesData = this.files[0];
	let ourFileReader = new FileReader();

	ourFileReader.onload = function(e){
		let isImage = false;
		let stringToBlob = e.target.result;
		for(let aarep=0; aarep<preffixBlobCollection.length; aarep++){
			stringToBlob = stringToBlob.replace(preffixBlobCollection[aarep],"");
		}

		for(let abrep=0; abrep<regexImage.length; abrep++){
			isImage = regexImage[abrep].test(stringToBlob);
				if(isImage){
					break;
			}
		}

		if(isImage){
			uploadKwitansiFisik.blobData = stringToBlob;

			let elementImage = document.createElement("img");

			let objectUrl = URL.createObjectURL(filesData);

			elementImage.onload = function handleLoad(){
				uploadKwitansiFisik.width = elementImage.width;
				uploadKwitansiFisik.height = elementImage.height;

				uploadKwitansiFisik.widthPt = uploadKwitansiFisik.width / 4.16;
				uploadKwitansiFisik.heightPt = uploadKwitansiFisik.height / 4.16;
				// console.log(`Width: ${elementImage.width} Height: ${elementImage.height}`);
				 URL.revokeObjectURL(objectUrl);
			}

			elementImage.src = objectUrl

		} else {
			console.log("can't converted");
		}
	}

	ourFileReader.readAsDataURL(this.files[0]);
}

// pembuatan upload gambar untuk kebutuhan global
// =============================================================
function setUploadUploadImage(fObjectForm, fTarget){
	console.log(fObjectForm.id);
	let filesData = fObjectForm.files[0];
	let ourFileReader = new FileReader();

	ourFileReader.onload = function(e){
		let isImage = false;
		let stringToBlob = e.target.result;
		for(let aarep=0; aarep<preffixBlobCollection.length; aarep++){
			stringToBlob = stringToBlob.replace(preffixBlobCollection[aarep],"");
		}

		for(let abrep=0; abrep<regexImage.length; abrep++){
			isImage = regexImage[abrep].test(stringToBlob);
				if(isImage){
					break;
			}
		}

		if(isImage){
			fTarget.blobData = stringToBlob;

			let elementImage = document.createElement("img");

			let objectUrl = URL.createObjectURL(filesData);

			elementImage.onload = function handleLoad(){
				fTarget.width = elementImage.width;
				fTarget.height = elementImage.height;

				fTarget.widthPt = fTarget.width / 4.16;
				fTarget.heightPt = fTarget.height / 4.16;
				// console.log(`Width: ${elementImage.width} Height: ${elementImage.height}`);
				console.log(fTarget);
				 URL.revokeObjectURL(objectUrl);
			}

			elementImage.src = objectUrl

		} else {
			console.log("can't converted");
		}
	}

	ourFileReader.readAsDataURL(fObjectForm.files[0]);
}
// =============================================================

function replaceTrailingWhitespace(eValue, eReplace){
	return eValue.replace(/[ ]{2,}/gi, eReplace);
}

function pembilang(eValue) {
	nilai = Math.floor(Math.abs(eValue));

	var simpanNilaiBagi = 0;
	var huruf = [
		'',
		'Satu',
		'Dua',
		'Tiga',
		'Empat',
		'Lima',
		'Enam',
		'Tujuh',
		'Delapan',
		'Sembilan',
		'Sepuluh',
		'Sebelas',
	];
	var temp = '';

	if (eValue < 12) {
		temp = ' ' + huruf[eValue];
	} else if (eValue < 20) {
		temp = pembilang(Math.floor(eValue - 10)) + ' Belas  ';
	} else if (eValue < 100) {
		simpanNilaiBagi = Math.floor(eValue / 10);
		temp = pembilang(simpanNilaiBagi) + ' Puluh  ' + pembilang(eValue % 10);
	} else if (eValue < 200) {
		temp = '  Seratus  ' + pembilang(eValue - 100);
	} else if (eValue < 1000) {
		simpanNilaiBagi = Math.floor(eValue / 100);
		temp = pembilang(simpanNilaiBagi) + '  Ratus  ' + pembilang(eValue % 100);
	} else if (eValue < 2000) {
		temp = '  Seribu ' + pembilang(eValue - 1000);
	} else if (eValue < 1000000) {
		simpanNilaiBagi = Math.floor(eValue / 1000);
		temp = pembilang(simpanNilaiBagi) + '  Ribu  ' + pembilang(eValue % 1000);
	} else if (eValue < 1000000000) {
		simpanNilaiBagi = Math.floor(eValue / 1000000);
		temp = pembilang(simpanNilaiBagi) + '  Juta  ' + pembilang(eValue % 1000000);
	} else if (eValue < 1000000000000) {
		simpanNilaiBagi = Math.floor(eValue / 1000000000);
		temp = pembilang(simpanNilaiBagi) + '  Miliar ' + pembilang(eValue % 1000000000);
	} else if (eValue < 1000000000000000) {
		simpanNilaiBagi = Math.floor(eValue / 1000000000000);
		temp = pembilang(eValue / 1000000000000) + '  Triliun  ' + pembilang(eValue % 1000000000000);
	}

	return temp;
}

function formToNumber(fObject){
	let formValue = formValueGetter(fObject);

	formValue = formValue.replaceAll(" ","");
	formValue = formValue.replaceAll(".","");
	formValue = formValue.replaceAll(",","");

	let parseValueToInt = parseInt(formValue);

	if (formValue == ""){
		return 0
	} else {
		if (isNaN(formValue)) {
			return 0
		} else {
			return parseInt(parseValueToInt);
		}
	}

	// console.log("isNaN : "+isNaN(formValue));
	// console.log("formValue : "+formValue);
	// console.log("parseInt : "+parseInt(formValue));
}

function setLocaleZakatSedekahLainnya(){
	let nominalZakat = formToNumber(formKwitansi.nominalZakat);
	let nominalSedekah = formToNumber(formKwitansi.nominalSedekah);
	let nominalLainnya = formToNumber(formKwitansi.nominalLainnya);

	let localeZakat = nominalZakat.toLocaleString("id-ID");
	let localeSedekah = nominalSedekah.toLocaleString("id-ID");
	let localeLainnya = nominalLainnya.toLocaleString("id-ID");

	if (nominalZakat !== 0){
		document.getElementById(formKwitansi.nominalZakat.id).value = localeZakat;
	} else{
		document.getElementById(formKwitansi.nominalZakat.id).value = "";
	}

	if (nominalSedekah !== 0){
		document.getElementById(formKwitansi.nominalSedekah.id).value = localeSedekah;
	} else {
		document.getElementById(formKwitansi.nominalSedekah.id).value = "";
	}

	if (nominalLainnya !== 0){
		document.getElementById(formKwitansi.nominalLainnya.id).value = localeLainnya;
	} else {
		document.getElementById(formKwitansi.nominalLainnya.id).value = "";
	}
	
}

function hitungOtomatisTotalTerbilang(){
	let nominalZakat = formToNumber(formKwitansi.nominalZakat);
	let nominalSedekah = formToNumber(formKwitansi.nominalSedekah);
	let nominalLainnya = formToNumber(formKwitansi.nominalLainnya);

	console.log("nominalZakat : "+nominalZakat);
	console.log("nominalSedekah : "+nominalSedekah);
	console.log("nominalLainnya : "+nominalLainnya);

	let total = nominalZakat + nominalSedekah + nominalLainnya;

	console.log("total : "+total)

	let nominalToString = total.toLocaleString("id-ID");

	let terbilang = replaceTrailingWhitespace(pembilang(total), " ");

	terbilang = terbilang.trim();

	terbilang += " rupiah"

	let kolomTotal = document.getElementById(formKwitansi.nominalJumlah.id);
	kolomTotal.value = nominalToString;

	let areaTerbilang = document.getElementById(formKwitansi.jumlahTerbilang.id);
	areaTerbilang.value = terbilang;

	setLocaleZakatSedekahLainnya();
}

function setValueToForm(fFormTarget, fValue){
	let target = document.getElementById(fFormTarget);
	target.value = fValue;
}

function setDataFromForm(){
	dataForm.nomorkw = formValueGetter(formKwitansi.nomor);
	// dataForm.wilayah = formValueGetter(formKwitansi.wilayah);
	dataForm.tanggal = formValueGetter(formKwitansi.tanggal);
	dataForm.alamat = formValueGetter(formKwitansi.alamat);
	dataForm.nama = formValueGetter(formKwitansi.nama);
	dataForm.telponFax = formValueGetter(formKwitansi.telponFax);
	dataForm.hp = formValueGetter(formKwitansi.hp);
	dataForm.regid = formValueGetter(formKwitansi.regid);
	dataForm.npwp = formValueGetter(formKwitansi.npwp);
	dataForm.jenisZakat = formValueGetter(formKwitansi.jenisZakat);
	dataForm.jenisLainnya = formValueGetter(formKwitansi.jenisLainnya);
	dataForm.nominalZakat = formValueGetter(formKwitansi.nominalZakat);
	dataForm.nominalSedekah = formValueGetter(formKwitansi.nominalSedekah);
	dataForm.nominalLainnya = formValueGetter(formKwitansi.nominalLainnya);
	dataForm.nominalTotal = formValueGetter(formKwitansi.nominalJumlah);
	dataForm.jumlahTerbilang = formValueGetter(formKwitansi.jumlahTerbilang);
	dataForm.jenisMelalui = formValueGetter(formKwitansi.jenisMelalui);
	dataForm.penerima = formValueGetter(formKwitansi.penerima);
	dataForm.penyetor = formValueGetter(formKwitansi.penyetor);
}

function setFormFromData(){
	// setValueToForm(formKwitansi.wilayah.id, dataForm.wilayah);
	setValueToForm(formKwitansi.nomor.id, dataForm.nomorkw);
	setValueToForm(formKwitansi.tanggal.id, dataForm.tanggal);
	setValueToForm(formKwitansi.alamat.id, dataForm.alamat);
	setValueToForm(formKwitansi.nama.id, dataForm.nama);
	setValueToForm(formKwitansi.telponFax.id, dataForm.telponFax);
	setValueToForm(formKwitansi.hp.id, dataForm.hp);
	setValueToForm(formKwitansi.regid.id, dataForm.regid);
	setValueToForm(formKwitansi.npwp.id, dataForm.npwp);
	setValueToForm(formKwitansi.jenisZakat.id, dataForm.jenisZakat);
	setValueToForm(formKwitansi.jenisLainnya.id, dataForm.jenisLainnya);
	setValueToForm(formKwitansi.nominalZakat.id, dataForm.nominalZakat);
	setValueToForm(formKwitansi.nominalSedekah.id, dataForm.nominalSedekah);
	setValueToForm(formKwitansi.nominalLainnya.id, dataForm.nominalLainnya);
	setValueToForm(formKwitansi.nominalJumlah.id, dataForm.nominalTotal);
	setValueToForm(formKwitansi.jumlahTerbilang.id, dataForm.jumlahTerbilang);
	setValueToForm(formKwitansi.jenisMelalui.id, dataForm.jenisMelalui);
	setValueToForm(formKwitansi.penerima.id, dataForm.penerima);
	setValueToForm(formKwitansi.penyetor.id, dataForm.penyetor);
}

function resetForm(){
	// setValueToForm(formKwitansi.wilayah.id, "");
	setValueToForm(formKwitansi.nomor.id, "");
	setValueToForm(formKwitansi.tanggal.id, "");
	setValueToForm(formKwitansi.alamat.id, "");
	setValueToForm(formKwitansi.nama.id, "");
	setValueToForm(formKwitansi.telponFax.id, "");
	setValueToForm(formKwitansi.hp.id, "");
	setValueToForm(formKwitansi.regid.id, "");
	setValueToForm(formKwitansi.npwp.id, "");
	setValueToForm(formKwitansi.jenisZakat.id, "");
	setValueToForm(formKwitansi.jenisLainnya.id, "");
	setValueToForm(formKwitansi.nominalZakat.id, "");
	setValueToForm(formKwitansi.nominalSedekah.id, "");
	setValueToForm(formKwitansi.nominalLainnya.id, "");
	setValueToForm(formKwitansi.nominalJumlah.id, "");
	setValueToForm(formKwitansi.jumlahTerbilang.id, "");
	setValueToForm(formKwitansi.jenisMelalui.id, "");
	setValueToForm(formKwitansi.penerima.id, "");
	setValueToForm(formKwitansi.penyetor.id, "");
}

function setFormDefaultValue(){
	// setValueToForm(formKwitansi.wilayah.id, "KOTA SINGKAWANG");
	setValueToForm(formKwitansi.nomor.id, "00000001");
	let currentDate = new Date();
	setValueToForm(formKwitansi.tanggal.id, currentDate.getFullYear()+"-"+(currentDate.getMonth()+1).toString().padStart(2,"0")+"-"+currentDate.getDate().toString().padStart(2,"0"));
	setValueToForm(formKwitansi.alamat.id, "Jl Pembangunan, Kelurahan Tengah, Kota Singkawang");
	setValueToForm(formKwitansi.nama.id, "Muzaki");
	setValueToForm(formKwitansi.telponFax.id, "0812-5800-0399");
	setValueToForm(formKwitansi.hp.id, "0812-5800-0399");
	setValueToForm(formKwitansi.regid.id, "6172-1234-5678-9012");
	setValueToForm(formKwitansi.npwp.id, "6172-9876-5432-1000");
	setValueToForm(formKwitansi.jenisZakat.id, "MAL");
	setValueToForm(formKwitansi.jenisLainnya.id, "Qurban");
	setValueToForm(formKwitansi.nominalZakat.id, "5.000.000");
	setValueToForm(formKwitansi.nominalSedekah.id, "3.000.000");
	setValueToForm(formKwitansi.nominalLainnya.id, "24.000.000");
	setValueToForm(formKwitansi.nominalJumlah.id, "32.000.000");
	setValueToForm(formKwitansi.jumlahTerbilang.id, "TIGA PULUH DUA JUTA RUPIAH");
	setValueToForm(formKwitansi.jenisMelalui.id, "kas");
	setValueToForm(formKwitansi.penerima.id, "Amil Lazismu");
	setValueToForm(formKwitansi.penyetor.id, "Perwakilan Muzaki");
}
