let allElem = {
	inputNomorKwitansi : {
		id : "inputNomorKwitansi",
		type : "labelWithText",
		typeInput : "text",
		label : "Nomor Kwitansi"
	},
	inputTanggalKwitansi : {
		id : "inputTanggalKwitansi",
		type : "labelWithDateWithDefaultButton",
		typeInput : "datetime-local",
		label : "Tanggal",
		maxDate : {
			year : 0,
			month : 0,
			day : 1
		},
		buttonDefault : {
			id : "inputTanggalKwitansiButtonReset"
		}
	},
	kwTextWilayah : {
		id : "kwTextWilayah",
		style : {
			fontFamily : "Roboto",
			position : "relative",
			letterSpacing : "1px",
			fontSize : "7pt",
			fontStyle : "normal",
			fontWeight : "bold",
			lineHeight : "inherit",
			wordSpacing : "inherit",
			textAlign : "center",
			width : "160px",
			top : -540,
			left : "21px"
		},
		labelText : "KOTA SINGKAWANG",
	},
	kwTextNomor : {
		id : "kwTextNomor",
		style : {
			fontFamily : "Roboto Mono",
			position : "relative",
			letterSpacing : "1px",
			fontSize : "12pt",
			fontStyle : "normal",
			fontWeight : "bold",
			lineHeight : "inherit",
			wordSpacing : "inherit",
			top : -548,
			left : 254,
		},
		labelText : "15-558622212-88485-06238",
	},
	kwTextAtasNama : {
		id : "kwTextAtasNama",
		style : {
			fontFamily : "Roboto",
			position : "relative",
			letterSpacing : "1px",
			fontSize : "13pt",
			fontStyle : "italic",
			fontWeight : "bold",
			lineHeight : "inherit",
			wordSpacing : "inherit",
			top : -476,
			left : 360
		},
		labelText : "Yudho Wicaksono Dwi R",
	},
	kwTextAlamat : {
		id : "kwTextAlamat",
		style : {
			fontFamily : "Roboto",
			position : "relative",
			letterSpacing : "1px",
			fontSize : "13pt",
			fontStyle : "italic",
			fontWeight : "bold",
			lineHeight : "inherit",
			wordSpacing : "inherit",
			top : -453,
			left : 360
		},
		labelText : "Singkawang Utara, Kalimantan Barat",
	},
	kwTextTelepon : {
		id : "kwTextTelepon",
		style : {
			fontFamily : "Roboto",
			position : "relative",
			letterSpacing : "1px",
			fontSize : "13pt",
			fontStyle : "italic",
			fontWeight : "bold",
			lineHeight : "inherit",
			wordSpacing : "inherit",
			top : -429,
			left : 360
		},
		labelText : "0812-4705-5812",
	},
	kwTextHp : {
		id : "kwTextFax",
		style : {
			fontFamily : "Roboto",
			position : "relative",
			letterSpacing : "1px",
			fontSize : "13pt",
			fontStyle : "italic",
			fontWeight : "bold",
			lineHeight : "inherit",
			wordSpacing : "inherit",
			top : -429,
			left : 640
		},
		labelText : "0812-4705-5812",
	},
	kwTextRegId : {
		id : "kwTextRegId",
		style : {
			fontFamily : "Roboto Mono",
			position : "relative",
			letterSpacing : "5px",
			fontSize : "13pt",
			fontStyle : "normal",
			fontWeight : "bold",
			lineHeight : "inherit",
			wordSpacing : "inherit",
			top : -402,
			left : 357,
			width : 480,
		},
		labelText : "",
	},
	kwTextNpwp : {
		id : "kwTextNpwp",
		style : {
			fontFamily : "Roboto Mono",
			position : "relative",
			letterSpacing : "5px",
			fontSize : "13pt",
			fontStyle : "normal",
			fontWeight : "bold",
			lineHeight : "inherit",
			wordSpacing : "inherit",
			top : -378,
			left : 357
		},
		labelText : "",
	},
	kwTextTanggal : {
		id : "kwTextTanggal",
		style : {
			fontFamily : "Roboto Mono",
			position : "relative",
			letterSpacing : "2px",
			fontSize : "12pt",
			fontStyle : "normal",
			fontWeight : "bold",
			lineHeight : "inherit",
			wordSpacing : "inherit",
			top : -551,
			left : 681
		},
		labelText : "17 / 06 / 2023",
	},
	kwTextJenisZakat : {
		id : "kwTextJenisZakat",
		style : {
			fontFamily : "sans-serif",
			position : "relative",
			letterSpacing : "0pt",
			fontSize : "11pt",
			fontStyle : "italic",
			fontWeight : "bold",
			lineHeight : "inherit",
			wordSpacing : "inherit",
			top : -323,
			left : 265
		},
		labelText : "Mal",
	},
	kwTextJenisProgram : {
		id : "kwTextJenisProgram",
		style : {
			fontFamily : "Roboto",
			position : "relative",
			letterSpacing : "0pt",
			fontSize : "11pt",
			fontStyle : "italic",
			fontWeight : "bold",
			lineHeight : "inherit",
			wordSpacing : "inherit",
			top : -283,
			left : 265
		},
		labelText : "Celengan Infak",
	},
	kwTextJumlahZakat : {
		id : "kwTextJumlahZakat",
		style : {
			fontFamily : "Roboto",
			position : "relative",
			letterSpacing : "1px",
			fontSize : "11pt",
			fontStyle : "italic",
			fontWeight : "bold",
			lineHeight : "inherit",
			wordSpacing : "inherit",
			top : -323,
			left : 472
		},
		labelText : "1.000.000,-",
	},
	kwTextJumlahSedekah : {
		id : "kwTextJumlahSedekah",
		style : {
			fontFamily : "Roboto",
			position : "relative",
			letterSpacing : "1px",
			fontSize : "11pt",
			fontStyle : "italic",
			fontWeight : "bold",
			lineHeight : "inherit",
			wordSpacing : "inherit",
			top : -303,
			left : 472
		},
		labelText : "5.000.000,-",
	},
	kwTextJumlahLainnya : {
		id : "kwTextJumlahLainnya",
		style : {
			fontFamily : "Roboto",
			position : "relative",
			letterSpacing : "1px",
			fontSize : "11pt",
			fontStyle : "italic",
			fontWeight : "bold",
			lineHeight : "inherit",
			wordSpacing : "inherit",
			top : -283,
			left : 472
		},
		labelText : "9.000.000,-",
	},
	kwTextJumlahTotal : {
		id : "kwTextJumlahTotal",
		style : {
			fontFamily : "Roboto",
			position : "relative",
			letterSpacing : "1px",
			fontSize : "11pt",
			fontStyle : "italic",
			fontWeight : "bold",
			lineHeight : "inherit",
			wordSpacing : "inherit",
			top : -263,
			left : 472
		},
		labelText : "15.000.000,-",
	},
	kwTextMelalui : {
		id : "kwTextMelalui",
		style : {
			fontFamily : "Roboto",
			position : "relative",
			letterSpacing : "0pt",
			fontSize : "15pt",
			fontStyle : "normal",
			fontWeight : "bold",
			lineHeight : "inherit",
			wordSpacing : "inherit",
			top : -330, // 298-314-330 (increment 16pt)
			left : 786
		},
		labelText : "✔",
	},
	kwTextTerbilang : {
		id : "kwTextTerbilang",
		style : {
			fontFamily : "Roboto",
			position : "relative",
			letterSpacing : "2pt",
			fontSize : "12pt",
			fontStyle : "italic",
			fontWeight : "bold",
			lineHeight : "17pt",
			wordSpacing : "3pt",
			top : -228,
			left : 357,
			width : 490,
		},
		labelText : "Lima Belas Miliar Seratus Delapan Puluh Delapan Juta Tujuh Ratus Enam Puluh Ribu Rupiah Rupiah",
	},
	kwTextPenerima : {
		id : "kwTextPenerima",
		style : {
			fontFamily : "Roboto",
			position : "relative",
			letterSpacing : "1px",
			fontSize : "12pt",
			fontStyle : "normal",
			fontWeight : "bold",
			lineHeight : "inherit",
			wordSpacing : "inherit",
			top : -85,
			left : 419,
			width : 120,
			textAlign : "center",
		},
		labelText : "Sandy",
	},
	kwTextPenyetor : {
		id : "kwTextPenyetor",
		style : {
			fontFamily : "Roboto",
			position : "relative",
			letterSpacing : "1px",
			fontSize : "12pt",
			fontStyle : "normal",
			fontWeight : "bold",
			lineHeight : "inherit",
			wordSpacing : "inherit",
			width : 120,
			textAlign : "center",
			top : -85,
			left : 665
		},
		labelText : "Yudho",
	},
	svgBackgroundKwitansi : {
		id : "svgBackgroundKwitansi",
		style : {
			width : 891,
			height : 628,
			x : 0,
			y : 0
		},
		imageBlob : dataKwitansi6,
	},
	svgCorrectionTanggal : {
		id : "svgCorrectionTanggal",
		style : {
			backgroundColor : "#FFFFFF",
			opacity : 1,
			position : "absolute",
			width : "190px",
			height : "30px",
			top : 70,
			left : 674
		}
	},
	svgCorrectionRegid : {
		id : "svgCorrectionRegid",
		style : {
			backgroundColor : "#FFFFFF",
			opacity : 1,
			position : "absolute",
			width : "350px",
			height : "25px",
			top : 225,
			left : 348
		}
	},
	svgCorrectionNpwp : {
		id : "svgCorrectionNpwp",
		style : {
			backgroundColor : "#FFFFFF",
			opacity : 1,
			position : "absolute",
			width : "350px",
			height : "25px",
			top : 250,
			left : 348
		}
	},
	svgTandaTanganPenyetor : {
		id : "svgTandaTanganPenyetor",
		style : {
			width : 150,
			height : 120,
			x : 650,
			y : 460
		},
		imageBlob : ttdPenyetor,
	},
	svgTandaTanganPenerima : {
		id : "svgTandaTanganPenerima",
		style : {
			width : 150,
			height : 120,
			x : 403,
			y : 460
		},
		imageBlob : ttdPakKhusnul,
	},
	svgCapLazismu : {
		id : "svgCapLazismu",
		style : {
			width : 150,
			height : 81,
			x : 550,
			y : 460
		},
		imageBlob : capLazismu,
	}
}
