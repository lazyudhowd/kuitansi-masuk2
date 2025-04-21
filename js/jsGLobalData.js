let kwitansiMasukData = {
	path : imgKwitansi,
	tipe : "png",
	width : 555.8,
	height : 397.1,
	scale : 1
}

let daftarTabel = {
	dataInduk : "tabel-data-induk-kuitansi",
	dataNilaiTransaksi : "tabel-data-jenis-nilai-transaksi",
	dataPersonal : "tabel-data-personal-kuitansi",
	tombolAksi : "tabel-tombol-aksi",
	uploadGambar : "tabel-data-upload"
}

let tabelForm = {
	id : "tableForm"
}

let infoLazismu = {
	sk : {
		text : "Lembaga Amil Zakat Nasional\nSK. Menteri Agama RI\nNo 730 tahun 2016\nTanggal 14 Desember 2016\n",
		position : {
			x : 83.5,
			y : 103
		},
		size : {
			maxWidth : 118
		},
		align : "center",
		baseline : "hanging",
		fontsize : 7,
		fontfamily : "Lato",
		fontstyle : "normal",
		lineheightfactor : 1
	},
	kontak : {
		text : "Sekretariat Lazismu Kota Singkawang\nJl Pembangunan Kel Tengah\nKec. Singkawang Barat\nWA/HP : +62 812 58000 399\nEmail : lazismuskw@gmail.com",
		position : {
			x : 83.5,
			y : 152
		},
		size : {
			maxWidth : 118
		},
		align : "center",
		baseline : "hanging",
		fontsize : 7,
		fontfamily : "Lato",
		fontstyle : "normal",
		lineheightfactor : 1
	}
}

let preffixBlobCollection = [
	"data:image/png;base64,",
	"data:image/jpeg;base64,",
	"data:application/octet-stream;base64,"
];

let regexImage = [
	/^\/9j\/4(.+)$/,
	/^iVBORw0KGgoAAAANSUhEUgAA(.+)$/
];

let gbHari = {
	indonesia : ["minggu","senin","selasa","rabu","kamis","jumat","sabtu"]
}

let gbBulan = {
	indonesia : {
		lengkap : ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],
		singkat : ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Ags","Sep","Okt","Nov","Des"]
	}
};

let uploadCap = {
	penerima : {
		blobData : "",
		width : 0,
		height : 0,
		widthPt : 0,
		heightPt : 0,
		maxWidth : 104.9,
		maxHeight : 59.3,
		posX : 297.9,
		posY : 322.3
	},
	penyetor : {
		blobData : "",
		width : 0,
		height : 0,
		widthPt : 0,
		heightPt : 0,
		maxWidth : 104.9,
		maxHeight : 104.9,
		posX : 456.6,
		posY : 322.3
	}
}

let uploadTtd = {
	penerima : {
		blobData : "",
		width : 0,
		height : 0,
		widthPt : 0,
		heightPt : 0,
		maxWidth : 106.3,
		maxHeight : 60,
		posX : 249.8,
		posY : 308.4
	},
	penyetor : {
		blobData : "",
		width : 0,
		height : 0,
		widthPt : 0,
		heightPt : 0,
		maxWidth : 106.3,
		maxHeight : 60,
		posX : 408.5,
		posY : 308.4
	}
}

let uploadKwitansiFisik = {
	blobData : "",
	width : 0,
	height : 0,
	widthPt : 0,
	heightPt : 0,
	maxWidth : 508.8
}

const pxToPt = 4.1666

let dataForm = {
	nomorkw : "",
	wilayah : "",
	tanggal : "",
	alamat : "",
	nama : "",
	telponFax : "",
	hp : "",
	regid : "",
	npwp : "",
	jenisZakat : "",
	jenisLainnya : "",
	nominalZakat : "",
	nominalSedekah : "",
	nominalLainnya : "",
	nominalTotal : "",
	jumlahTerbilang : "",
	jenisMelalui : "",
	penerima : "",
	penyetor : ""
};