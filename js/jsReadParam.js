(function(){
	// read param
	const queryString = window.location.search;

	const urlParams = new URLSearchParams(queryString);

	// if(urlParams.get("wilayah")){
	// 	dataForm.wilayah = urlParams.get('wilayah');
	// }
	if(urlParams.get("nomor")){
		dataForm.nomorkw = urlParams.get('nomor');
	}
	if(urlParams.get("tanggal")){
		dataForm.tanggal = urlParams.get('tanggal');
	}
	if(urlParams.get("alamat")){
		dataForm.alamat = urlParams.get('alamat');
	}
	if(urlParams.get("nama")){
		dataForm.nama = urlParams.get('nama');
	}
	if(urlParams.get("telponfax")){
		dataForm.telponFax = urlParams.get('telponfax');
	}
	if(urlParams.get("hp")){
		dataForm.hp = urlParams.get('hp');
	}
	if(urlParams.get("regid")){
		dataForm.regid = urlParams.get('regid');
	}
	if(urlParams.get("npwp")){
		dataForm.npwp = urlParams.get('npwp');
	}
	if(urlParams.get("jeniszakat")){
		dataForm.jenisZakat = urlParams.get('jeniszakat');
	}
	if(urlParams.get("jenislain")){
		dataForm.jenisLainnya = urlParams.get('jenislain');
	}
	if(urlParams.get("jmlzakat")){
		dataForm.nominalZakat = urlParams.get('jmlzakat');
	}
	if(urlParams.get("jmlsedekah")){
		dataForm.nominalSedekah = urlParams.get('jmlsedekah');
	}
	if(urlParams.get("jmllain")){
		dataForm.nominalLainnya = urlParams.get('jmllain');
	}
	if(urlParams.get("jmltotal")){
		dataForm.nominalTotal = urlParams.get('jmltotal');
	}
	if(urlParams.get("melalui")){
		dataForm.jenisMelalui = urlParams.get('melalui');
	}
	if(urlParams.get("penerima")){
		dataForm.penerima = urlParams.get('penerima');
	}
	if(urlParams.get("penyetor")){
		dataForm.penyetor = urlParams.get('penyetor');
	}

	// http://localhost/D0001_MyProject/D0007_KwitansiDigitalV4/index.html?nama=YUDHO%20Wicaksono&wilayah=DI%20YOGYAKARTA&tanggal=2024-12-08

	console.log(dataForm)
})();

setFormFromData();