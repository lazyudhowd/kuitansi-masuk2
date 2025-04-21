let kuitansiSettings = [
	profile1 : {
		jspdf : {
			orientation : "portrait",
			unit:"pt",
			format:"a4"
		},
		papper : {
			type : "a4",
			unit : "pt",
			size : {
				width : 595.2,
				height : 402.2
			}
		},
		listFont : [
			{
				path : "font/GoogleFont_Lato/Lato-Regular.ttf",
				family : "Lato",
				style : "normal"
			},
		],
		uploadKuitansiFisik : {
			labelHalaman1 : {
				text : "Halaman (1/2)",
				font : {
					family : "Lato",
					style : "normal",
					size : 6,
					color : "#000000"
				},
				position : {
					x : 297.6,
					y : 800
				},
				dimension : {
					maxWidth : 220
				},
				align : "center",
				baseline : "hanging"
			},
			labelHalaman2 : {
				text : "Halaman (2/2)",
				font : {
					family : "Lato",
					style : "normal",
					size : 6,
					color : "#000000"
				},
				position : {
					x : 297.6,
					y : 800
				},
				dimension : {
					maxWidth : 220
				},
				align : "left",
				baseline : "top"
			},
			labelKuitansiFisik : {
				text : "Foto / Scan Kuitansi Fisik",
				font : {
					family : "Lato",
					style : "normal",
					size : 12,
					color : "#000000"
				},
				position : {
					x : 297.6,
					y : 47.8
				},
				dimension : {
					maxWidth : 320
				},
				align : "center",
				baseline : "hanging"
			},
			fotoKuitansi : {
				tipe : "jpg",
				position : {
					x : 39.6,
					y : 67.8
				},
				dimension : {
					maxWidth : 320
				},
			}
		},
		cover : {
			penerima : {
				opacity : 1,
				fillColor : "#FFFFFF",
				position : {
					x : 244.1,
					y : 356.6
				},
				dimension : {
					width : 115.9,
					height : 15.6
				},
				style : "F"
			},
			penyetor : {
				opacity : 1,
				fillColor : "#FFFFFF",
				position : {
					x : 403.7,
					y : 356.6
				},
				dimension : {
					width : 115.9,
					height : 15.6
				},
				style : "F"
			},
			tanggal : {
				opacity : 1,
				fillColor : "#FFFFFF",
				position : {
					x : 446.2,
					y : 60.2
				},
				dimension : {
					width : 92.9,
					height : 14.9
				},
				style : "F"
			},
			regid : {
				opacity : 1,
				fillColor : "#FFFFFF",
				position : {
					x : 250.3,
					y : 147.6
				},
				dimension : {
					width : 238.6,
					height : 15.1
				},
				style : "F"
			},
			npwp : {
				opacity : 1,
				fillColor : "#FFFFFF",
				position : {
					x : 250.3,
					y : 163.4
				},
				dimension : {
					width : 238.6,
					height : 15.1
				},
				style : "F"
			}
		},
		data : {
			nomorkw : {
				font : {
					family : "RobotoMono",
					style : "normal",
					size : 12
				},
				position : {
					x : 199.2,
					y : 61.9
				},
				align : "left",
				baseline : "top"
			},
			tanggal : {
				font : {
					family : "RobotoMono",
					style : "normal",
					size : 13.2
				},
				position : {
					x : 448.9,
					y : 61.4
				},
				align : "left",
				baseline : "top"
			},
			nama : {
				font : {
					family : "RobotoMono",
					style : "normal",
					size : 10
				},
				position : {
					x : 252.0,
					y : 101.8
				},
				align : "left",
				baseline : "top"
			},
			alamat : {
				font : {
					family : "RobotoMono",
					style : "normal",
					size : 10
				},
				position : {
					x : 252.0,
					y : 101.8+15.8
				},
				align : "left",
				baseline : "top"
			},
			telponfax : {
				font : {
					family : "RobotoMono",
					style : "normal",
					size : 10
				},
				position : {
					x : 252.0,
					y : 101.8+(15.8*2)
				},
				align : "left",
				baseline : "top",
				charSpace : 1.1
			},
			hp : {
				font : {
					family : "RobotoMono",
					style : "normal",
					size : 10
				},
				position : {
					x : 421.7,
					y : 101.8+(15.8*2)
				},
				align : "left",
				baseline : "top",
				charSpace : 1.1
			},
			jenisPembayaran : {
				text : "☑",
				font : {
					family : "NotoSansSymbols2",
					style : "normal",
					size : 18.5
				},
				position : {
					x : 186.9,
					y : 193.6
				},
				align : "left",
				baseline : "top",
				charSpace : 1.1
			},
			regid : {
				font : {
					family : "RobotoMono",
					style : "normal",
					size : 10
				},
				position : {
					x : 252.0,
					y : 153
				},
				align : "left",
				baseline : "top",
				charSpace : 1.1
			},
			npwp : {
				font : {
					family : "RobotoMono",
					style : "normal",
					size : 10
				},
				position : {
					x : 252.0,
					y : 153+(15.8*1)
				},
				align : "left",
				baseline : "top",
				charSpace : 1.1
			},
			jenisZakat : {
				font : {
					family : "Lato",
					style : "normal",
					size : 10
				},
				position : {
					x : 205.6,
					y : 198.2
				},
				align : "left",
				baseline : "top"
			},
			jenisLainnya : {
				font : {
					family : "Lato",
					style : "normal",
					size : 10
				},
				position : {
					x : 205.6,
					y : 198.2+(15.8*2)
				},
				align : "left",
				baseline : "top"
			},
			nominalZakat : {
				font : {
					family : "RobotoMono",
					style : "normal",
					size : 10
				},
				position : {
					x : 305,
					y : 198.2
				},
				align : "left",
				baseline : "top"
			},
			nominalSedekah : {
				font : {
					family : "RobotoMono",
					style : "normal",
					size : 10
				},
				position : {
					x : 305,
					y : 198.2+15.8
				},
				align : "left",
				baseline : "top"
			},
			nominalLainnya : {
				font : {
					family : "RobotoMono",
					style : "normal",
					size : 10
				},
				position : {
					x : 305,
					y : 198.2+(15.8*2)
				},
				align : "left",
				baseline : "top"
			},
			nominalTotal : {
				font : {
					family : "RobotoMono",
					style : "normal",
					size : 10
				},
				position : {
					x : 305,
					y : 200.2+(15.8*3)
				},
				align : "left",
				baseline : "top"
			},
			penerima : {
				font : {
					family : "Lato",
					style : "normal",
					size : 8
				},
				position : {
					x : 302.2,
					y : 359.8
				},
				align : "center",
				baseline : "hanging",
				dimension : {
					maxWidth : 114
				}
			},
			penyetor : {
				font : {
					family : "Lato",
					style : "normal",
					size : 8
				},
				position : {
					x : 462,
					y : 359.8
				},
				align : "center",
				baseline : "hanging",
				dimension : {
					maxWidth : 114
				}
			},
			jumlahTerbilang : {
				lineHeighFactor : 1.5,
				font : {
					family : "Lato",
					style : "normal",
					size : 8
				},
				position : {
					x : 250.6,
					y : 275.6
				},
				align : "left",
				baseline : "hanging",
				dimension : {
					maxWidth : 290
				}
			}
		}
	}
];