(function(){
	// FORM DATA INDUK
	formBuilderTableStyle1_headerMaker(headerForm.dataInduk, daftarTabel.dataInduk)
	formBuilderTableStyle1_inputText(formKwitansi.nomor, daftarTabel.dataInduk);
	formBuilderTableStyle1_inputDate(formKwitansi.tanggal, daftarTabel.dataInduk);

	// FORM DATA PERSONAL
	formBuilderTableStyle1_headerMaker(headerForm.dataPersonal, daftarTabel.dataPersonal);
	formBuilderTableStyle1_inputText(formKwitansi.nama, daftarTabel.dataPersonal);
	formBuilderTableStyle1_inputText(formKwitansi.regid, daftarTabel.dataPersonal);
	formBuilderTableStyle1_inputText(formKwitansi.npwp, daftarTabel.dataPersonal);
	formBuilderTableStyle1_inputText(formKwitansi.telponFax, daftarTabel.dataPersonal);
	formBuilderTableStyle1_inputText(formKwitansi.hp, daftarTabel.dataPersonal);
	formBuilderTableStyle1_inputTextarea(formKwitansi.alamat, daftarTabel.dataPersonal);
	formBuilderTableStyle1_inputText(formKwitansi.penyetor, daftarTabel.dataPersonal);
	formBuilderTableStyle1_inputText(formKwitansi.penerima, daftarTabel.dataPersonal);

	// FORM NILAI DAN JENIS TRANSAKSI
	formBuilderTableStyle1_headerMaker(headerForm.dataNJTransaksi, daftarTabel.dataNilaiTransaksi);
	formBuilderTableStyle1_inputText(formKwitansi.jenisMelalui, daftarTabel.dataNilaiTransaksi);
	formBuilderTableStyle1_inputText(formKwitansi.jenisZakat, daftarTabel.dataNilaiTransaksi);
	formBuilderTableStyle1_inputText(formKwitansi.jenisLainnya, daftarTabel.dataNilaiTransaksi);
	formBuilderTableStyle1_inputText(formKwitansi.nominalZakat, daftarTabel.dataNilaiTransaksi);
	formBuilderTableStyle1_inputText(formKwitansi.nominalSedekah, daftarTabel.dataNilaiTransaksi);
	formBuilderTableStyle1_inputText(formKwitansi.nominalLainnya, daftarTabel.dataNilaiTransaksi);
	formBuilderTableStyle1_inputText(formKwitansi.nominalJumlah, daftarTabel.dataNilaiTransaksi);
	formBuilderTableStyle1_inputTextarea(formKwitansi.jumlahTerbilang, daftarTabel.dataNilaiTransaksi);
	formBuilderTableStyle1_buttonMaker(formButton.btnAutoHitung, daftarTabel.dataNilaiTransaksi);

	// ttd dan cap penyetor
	formBuilderTableStyle1_headerMaker(headerForm.dataUpload, daftarTabel.uploadGambar);
	formBuilderTableStyle1_inputButtonUploadMaker(formButton.btnUploadTtdPenyetor, daftarTabel.uploadGambar);
	formBuilderTableStyle1_inputButtonUploadMaker(formButton.btnUploadCapPenyetor, daftarTabel.uploadGambar);
	// ttd dan cap penerima
	formBuilderTableStyle1_inputButtonUploadMaker(formButton.btnUploadTtdPenerima, daftarTabel.uploadGambar);
	formBuilderTableStyle1_inputButtonUploadMaker(formButton.btnUploadCapPenerima, daftarTabel.uploadGambar);
	// upload kuitansi fisik
	formBuilderTableStyle1_inputButtonUploadMaker(formButton.btnUploadKwitansiFisik, daftarTabel.uploadGambar);

	formBuilderTableStyle1_headerMaker(headerForm.tombolAksi, daftarTabel.tombolAksi);
	formBuilderTableStyle1_buttonMaker(formButton.btnResetForm, daftarTabel.tombolAksi);
	formBuilderTableStyle1_buttonMaker(formButton.btnDefaultValue, daftarTabel.tombolAksi);
	formBuilderTableStyle1_buttonMaker(formButton.btnPreview, daftarTabel.tombolAksi);
	formBuilderTableStyle1_buttonMaker(formButton.btnDownload, daftarTabel.tombolAksi);

	// formBuilderTableStyle1_inputText(formKwitansi.wilayah, tabelForm.id);
	// formBuilderTableStyle1_inputText(formKwitansi.nomor, tabelForm.id);
	// formBuilderTableStyle1_inputDate(formKwitansi.tanggal, tabelForm.id);
	// formBuilderTableStyle1_inputText(formKwitansi.nama, tabelForm.id);
	// formBuilderTableStyle1_inputText(formKwitansi.regid, tabelForm.id);
	// formBuilderTableStyle1_inputText(formKwitansi.npwp, tabelForm.id);
	// formBuilderTableStyle1_inputText(formKwitansi.telponFax, tabelForm.id);
	// formBuilderTableStyle1_inputText(formKwitansi.hp, tabelForm.id);
	// formBuilderTableStyle1_inputTextarea(formKwitansi.alamat, tabelForm.id);
	// formBuilderTableStyle1_headerMaker(formKwitansi.groupHitungan, tabelForm.id)
	// formBuilderTableStyle1_inputText(formKwitansi.jenisZakat, tabelForm.id);
	// formBuilderTableStyle1_inputText(formKwitansi.jenisLainnya, tabelForm.id);
	// formBuilderTableStyle1_inputText(formKwitansi.nominalZakat, tabelForm.id);
	// formBuilderTableStyle1_inputText(formKwitansi.nominalSedekah, tabelForm.id);
	// formBuilderTableStyle1_inputText(formKwitansi.nominalLainnya, tabelForm.id);
	// formBuilderTableStyle1_buttonMaker(formButton.btnAutoHitung, tabelForm.id);
	// formBuilderTableStyle1_inputText(formKwitansi.nominalJumlah, tabelForm.id);
	// formBuilderTableStyle1_inputTextarea(formKwitansi.jumlahTerbilang, tabelForm.id);
	// formBuilderTableStyle1_inputText(formKwitansi.jenisMelalui, tabelForm.id);
	// formBuilderTableStyle1_inputText(formKwitansi.penerima, tabelForm.id);
	// formBuilderTableStyle1_inputText(formKwitansi.penyetor, tabelForm.id);

	// formBuilderTableStyle1_buttonMaker(formButton.btnResetForm, tabelForm.id);
	// formBuilderTableStyle1_buttonMaker(formButton.btnDefaultValue, tabelForm.id);

	// formBuilderTableStyle1_inputButtonUploadMaker(formButton.btnUploadTtdPenyetor, tabelForm.id);
	// formBuilderTableStyle1_inputButtonUploadMaker(formButton.btnUploadCapPenyetor, tabelForm.id);

	// formBuilderTableStyle1_inputButtonUploadMaker(formButton.btnUploadTtdPenerima, tabelForm.id);
	// formBuilderTableStyle1_inputButtonUploadMaker(formButton.btnUploadCapPenerima, tabelForm.id);
	
	// formBuilderTableStyle1_inputButtonUploadMaker(formButton.btnUploadKwitansiFisik, tabelForm.id);

	// formBuilderTableStyle1_buttonMaker(formButton.btnPreview, tabelForm.id);
	// formBuilderTableStyle1_buttonMaker(formButton.btnDownload, tabelForm.id);
})();

setFormDefaultValue()