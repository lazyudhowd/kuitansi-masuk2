let headerForm = {
	version : 1,

	dataInduk : {
		id : "idDataInduk",
		type : "text",
		headerLevel : 2,
		label : "DATA INDUK",
	},
	dataPersonal : {
		id : "idDataPersonal",
		type : "text",
		headerLevel : 2,
		label : "DATA PERSONAL"
	},
	dataNJTransaksi : {
		id : "idDataNJTransaksi",
		type : "text",
		headerLevel : 2,
		label : "DATA NILAI & JENIS TRANSAKSI"
	},
	dataUpload : {
		id : "idDataUpload",
		type : "text",
		headerLevel : 2,
		label : "UPLOAD GAMBAR"
	},
	tombolAksi : {
		id : "idTombolAksi",
		type : "text",
		headerLevel : 2,
		label : "TOMBOL AKSI"
	}
}

let formKwitansi = {
	version : 1,

	wilayah : {
		id : "idFormWilayah",
		type : "text",
		label : "Wilayah"
	},
	nomor : {
		id : "idFormNomor",
		type : "text",
		label : "Nomor Kwitansi"
	},
	tanggal : {
		id : "idFormTanggalKwitansi",
		type : "datetime",
		label : "Tanggal",
		dateRange : {maxs:1, mins:0},
		button : {reset : "idFormResetTanggalKwitansi"}
	},
	alamat : {
		id : "idFormAlamat",
		type : "text",
		label : "Alamat"
	},
	nama : {
		id : "idFormNama",
		type : "text",
		label : "Nama"
	},
	telponFax : {
		id : "idFormTelponFax",
		type : "text",
		label : "Telpon & Fax"
	},
	hp : {
		id : "idFormHp",
		type : "text",
		label : "HP"
	},
	regid : {
		id : "idFormRegid",
		type : "text",
		label : "REGID"
	},
	npwp : {
		id : "idFormNpwp",
		type : "text",
		label : "NPWP"
	},
	jenisZakat : {
		id : "idFormJenisZakat",
		type : "text",
		label : "Jenis Zakat"
	},
	jenisLainnya : {
		id : "idFormJenisLainnya",
		type : "text",
		label : "Lainnya"
	},
	nominalZakat : {
		id : "idFormNominalZakat",
		type : "text",
		label : "Zakat (Rp)",
	},
	nominalSedekah : {
		id : "idFormNominalSedekah",
		type : "text",
		label : "Sedekah (Rp)"
	},
	nominalLainnya : {
		id : "idFormNominalLainnya",
		type : "text",
		label : "Lainnya (Rp)"
	},
	nominalJumlah : {
		id : "idFormNominalJumlah",
		type : "text",
		label : "Total"
	},
	jumlahTerbilang : {
		id : "idFormJumlahTerbilang",
		type : "text",
		label : "Terbilang"
	},
	jenisMelalui : {
		id : "idFormMelalui",
		type : "text",
		label : "Melalui (Kas, Bank, Wesel)",
	},
	penerima : {
		id : "idFormPenerima",
		type : "text",
		label : "Penerima",
	},
	penyetor : {
		id : "idFormPenyetor",
		type : "text",
		label : "Penyetor",
	},
	groupHitungan : {
		id : "groupHitungan",
		type : "header",
		label : "Jumlah dan jenis yang dibayarkan",
		headerLevel : 2,
		styleClass : "laz-formsubheader"
	}
}

let formInputTtdKwitansi = {
	penerima : {id:"Penerima", data:""},
	penyetor : {id:"Penyetor", data:""},
}

let formInputCapKwitansi = {
	penerima : {id:"Penerima", data:""},
	penyetor : {id:"Penyetor", data:""}
}

let formButton = {
	btnPreview : {
		id : "previewPdf",
		label : "Preview Pdf",
		btnStyle : "btn-default laz-w75"
	},
	btnDownload : {
		id : "downloadPdf",
		label : "Download Pdf",
		btnStyle : "btn-default laz-w75"
	},
	btnUploadTtdPenerima : {
		id : "btnUploadTtdPenerima",
		idActualBtn : "actual_btnUploadTtdPenerima",
		idDisplayBtn : "display_btnUploadTtdPenerima",
		label : "Upload Tanda Tangan Penerima",
		btnStyle : "btn-default laz-w75 laz-btn"
	},
	btnUploadCapPenerima : {
		id : "btnUploadCapPenerima",
		idActualBtn : "actual_btnUploadCapPenerima",
		idDisplayBtn : "display_btnUploadCapPenerima",
		label : "Upload Cap Penerima",
		btnStyle : "btn-default laz-w75 laz-btn"
	},
	btnUploadTtdPenyetor : {
		id : "btnUploadTtdPenyetor",
		idActualBtn : "actual_btnUploadTtdPenyetor",
		idDisplayBtn : "display_btnUploadTtdPenyetor",
		label : "Upload Tanda Tangan Penyetor",
		btnStyle : "btn-default laz-w75 laz-btn"
	},
	btnUploadCapPenyetor : {
		id : "btnUploadCapPenyetor",
		idActualBtn : "actual_btnUploadCapPenyetor",
		idDisplayBtn : "display_btnUploadCapPenyetor",
		label : "Upload Cap Penyetor",
		btnStyle : "btn-default laz-w75 laz-btn"
	},
	btnUploadKwitansiFisik : {
		id : "btnUploadKwitansiFisik",
		idActualBtn : "actual_btnUploadKwitansiFisik",
		idDisplayBtn : "display_btnUploadKwitansiFisik",
		label : "Upload Kwitansi Fisik",
		btnStyle : "btn-default laz-w75",
		disableOption : "btnUploadKwitansiFisikDisableOption"
	},
	btnAutoHitung : {
		id : "btnAutoHitung",
		label : "Hitung Otomatis (Total & Terbilang)",
		btnStyle : "btn-default laz-w75"
	},
	btnResetForm : {
		id : "btnResetForm",
		label : "RESET",
		btnStyle : "btn-default laz-w75"
	},
	btnDefaultValue : {
		id : "btnDefaultValue",
		label : "ISIKAN NILAI DEFAULT",
		btnStyle : "btn-default laz-w75"
	}
}
