function makepdf(){
	setDataFromForm()

	const { jsPDF } = window.jspdf;
	var pdf = new jsPDF({
		orientation : "portrait",
		unit:"pt",
		format:"a4"
	});

	let context = pdf.context2d;

	let papper = {
		type : "a4",
		unit : "pt",
		size : {
			width : 595.2,
			height : 402.2
		}

	}

	// Memasukkan font
	pdf.addFont('font/GoogleFont_Lato/Lato-Regular.ttf', "Lato", "normal");
	pdf.addFont('font/GoogleFont_Lato/Lato-Bold.ttf', "Lato", "bold")
	pdf.addFont('font/GoogleFont_Fleur_De_Leah/FleurDeLeah-Regular.ttf', "FleurDeLeah", "normal")
	pdf.addFont('font/GoogleFont_Roboto_Mono/static/RobotoMono-Regular.ttf', "RobotoMono", "normal")
	pdf.addFont('font/GoogleFont_Noto_Sans_Symbols_2/NotoSansSymbols2-Regular.ttf', "NotoSansSymbols2", "normal")

	// untuk px nantinya gunakan :
	// Possible values are "pt" (points), "mm", "cm", "m", "in" or "px". Note that in order to get the correct scaling for "px" units, you need to enable the hotfix "px_scaling" by setting options.hotfixes = ["px_scaling"].

	// https://stackoverflow.com/questions/51829884/is-it-possible-to-use-custom-google-web-fonts-with-jspdf

	// masukkan gambar kwitansi

	pdf.addImage(imgKwitansi, "png",  12, 8, kwitansiMasukData.width/kwitansiMasukData.scale, kwitansiMasukData.height/kwitansiMasukData.scale, undefined, "FAST");

	// memasukkan box untuk menutupi background

	// menutupi di bawah Lazismu
	// if(dataForm.wilayah){
	// 	pdf.saveGraphicsState();
	// 	pdf.setGState(new pdf.GState({opacity: 1}));
	// 	pdf.setFillColor("#FFFFFF");
	// 	pdf.rect(27.8, 73.2, 121.7, 19.4, "F");
	// 	pdf.restoreGraphicsState();
	// }

	// menutupi bagian bawah penerima.
	if(dataForm.penerima){
		pdf.saveGraphicsState();
		pdf.setGState(new pdf.GState({opacity: 1}));
		pdf.setFillColor("#FFFFFF");
		pdf.rect(244.1, 356.6, 115.9, 15.6, "F");
		pdf.restoreGraphicsState();
	}

	// menutupi bagian bawah penyetor
	if(dataForm.penyetor){
		pdf.saveGraphicsState();
		pdf.setGState(new pdf.GState({opacity: 1}));
		pdf.setFillColor("#FFFFFF");
		pdf.rect(403.7, 356.6, 115.9, 15.6, "F");
		pdf.restoreGraphicsState();
	}

	// menutupi bagian bawah tanggal
	if(dataForm.tanggal){
		pdf.saveGraphicsState();
		pdf.setGState(new pdf.GState({opacity: 1}));
		pdf.setFillColor("#FFFFFF");
		pdf.rect(446.2, 60.2, 92.9, 14.9, "F");
		pdf.restoreGraphicsState();
	}

	// menutupi bagian bawah regid
	if(dataForm.regid){
		pdf.saveGraphicsState();
		pdf.setGState(new pdf.GState({opacity: 1}));
		pdf.setFillColor("#FFFFFF");
		pdf.rect(250.3, 147.6, 238.6, 15.1, "F");
		pdf.restoreGraphicsState();
	}

	// menutupi bagian bawah npwp
	if(dataForm.npwp){
		pdf.saveGraphicsState();
		pdf.setGState(new pdf.GState({opacity: 1}));
		pdf.setFillColor("#FFFFFF");
		pdf.rect(250.3, 163.4, 238.6, 15.1, "F");
		pdf.restoreGraphicsState();
	}

	// Masukkan informasi-informasi ke dalam kwitansi
	// pdf.setFontSize(7.5);
	// pdf.setFont("Lato", 'normal');
	// pdf.text(dataForm.wilayah, 88.4, 75, {align:"center", baseline:"top", charSpace:1.1});

	pdf.setFontSize(12);
	pdf.setFont("RobotoMono", 'normal');
	pdf.text(dataForm.nomorkw, 199.2, 61.9, {align:"left", baseline:"top"});

	if(dataForm.tanggal != "NaN-NaN-NaN"){
		pdf.setFontSize(13.2);
		pdf.setFont("RobotoMono", 'normal');
		pdf.text(dataForm.tanggal, 448.9, 61.4, {align:"left", baseline:"top"});
	}

	pdf.setFontSize(10);
	pdf.setFont("Lato", 'normal');
	pdf.text(dataForm.nama, 252.0, 101.8, {align:"left", baseline:"top"});

	pdf.setFontSize(10);
	pdf.setFont("Lato", 'normal');
	pdf.text(dataForm.alamat, 252.0, 101.8+15.8, {align:"left", baseline:"top"});

	pdf.setFontSize(10);
	pdf.setFont("Lato", 'normal');
	pdf.text(dataForm.telponFax, 252.0, 101.8+(15.8*2), {align:"left", baseline:"top", charSpace:1.1});

	pdf.setFontSize(10);
	pdf.setFont("Lato", 'normal');
	pdf.text(dataForm.hp, 421.7, 101.8+(15.8*2), {align:"left", baseline:"top", charSpace:1.1});

	let valueJenisPembayaran = dataForm.jenisMelalui;
	console.log("valueJenisPembayaran : "+valueJenisPembayaran)
	if(valueJenisPembayaran){
		pdf.setFontSize(18.5);
		pdf.setFont("NotoSansSymbols2", 'normal');
		let posisiJenisPembayaran = 0
		if(valueJenisPembayaran.toLowerCase() == "bank"){
			posisiJenisPembayaran = 1;
		} else if(valueJenisPembayaran.toLowerCase() == "wesel"){
			posisiJenisPembayaran = 2;
		} else{
			posisiJenisPembayaran = 0;
		}
		pdf.text("☑", 486.9, (193.6 + 15.8 * posisiJenisPembayaran), {align:"left", baseline:"top"});
	}

	pdf.setFontSize(10);
	pdf.setFont("RobotoMono", 'normal');
	pdf.text(dataForm.regid, 252.0, 153, {align:"left", baseline:"top", charSpace:1.1});

	pdf.setFontSize(10);
	pdf.setFont("RobotoMono", 'normal');
	pdf.text(dataForm.npwp, 252.0, 153+(15.8*1), {align:"left", baseline:"top", charSpace:1.1});

	pdf.setFontSize(10);
	pdf.setFont("Lato", 'normal');
	pdf.text(dataForm.jenisZakat, 205.6, 198.2, {align:"left", baseline:"top"});

	pdf.setFontSize(10);
	pdf.setFont("Lato", 'normal');
	pdf.text(dataForm.jenisLainnya, 205.6, 198.2+(15.8*2), {align:"left", baseline:"top"});

	pdf.setFontSize(10);
	pdf.setFont("RobotoMono", 'normal');
	pdf.text(dataForm.nominalZakat, 305.0, 198.2, {align:"left", baseline:"top"});

	pdf.setFontSize(10);
	pdf.setFont("RobotoMono", 'normal');
	pdf.text(dataForm.nominalSedekah, 305.0, 198.2+(15.8*1), {align:"left", baseline:"top"});

	pdf.setFontSize(10);
	pdf.setFont("RobotoMono", 'normal');
	pdf.text(dataForm.nominalLainnya, 305.0, 198.2+(15.8*2), {align:"left", baseline:"top"});

	pdf.setFontSize(10);
	pdf.setFont("RobotoMono", 'normal');
	pdf.text(dataForm.nominalTotal, 305.0, 200.2+(15.8*3), {align:"left", baseline:"top"});

	pdf.setFontSize(8);
	pdf.setFont("Lato", 'normal');
	pdf.text(dataForm.penerima, 302.2, 359.8+(15.8*0), {maxWidth:114, align:"center", baseline:"hanging"});

	pdf.setFontSize(8);
	pdf.setFont("Lato", 'normal');
	pdf.text(dataForm.penyetor, 462.0, 359.8+(15.8*0), {maxWidth:114, align:"center", baseline:"hanging"});

	// line height menentukan koordinat awal

	pdf.setFontSize(10);
	pdf.setFont("Lato", 'normal');
	pdf.setLineHeightFactor(1.5) 
	pdf.text(dataForm.jumlahTerbilang, 250.6, 275.6, {maxWidth:290, align:"left", baseline:"hanging"});

	// sk Lazismu
	pdf.setFontSize(7);
	pdf.setFont("Lato", 'normal');
	pdf.setLineHeightFactor(1);
	pdf.text(
		infoLazismu.sk.text,
		infoLazismu.sk.position.x,
		infoLazismu.sk.position.y,
		{
			maxWidth : infoLazismu.sk.size.maxWidth,
			align:infoLazismu.sk.align,
			baseline:infoLazismu.sk.baseline
		});

	// kontak
	pdf.setFontSize(7);
	pdf.setFont("Lato", 'normal');
	pdf.text(
		infoLazismu.kontak.text,
		infoLazismu.kontak.position.x,
		infoLazismu.kontak.position.y,
		{
			maxWidth : infoLazismu.kontak.size.maxWidth,
			align : infoLazismu.kontak.align,
			baseline : infoLazismu.kontak.size.baseline
		});

	pdf.setDrawColor("#FFFFFF");

	// pdf.line(26.2, 328, (26.2 + 120), 328);
	// pdf.line(26.2, 390, (26.2 + 120), 390);

	let dalilNomor = 0;
	pdf.setFontSize(dalil[dalilNomor].fontSize);
	pdf.setFont(dalil[dalilNomor].fontfamily, dalil[dalilNomor].fontstyle);
	pdf.setLineHeightFactor(1);
	pdf.setTextColor("#FFFFFF");
	let dalilText = dalil[dalilNomor].text;
	// dalilText += "\n";
	// dalilText += "[ "+dalil[dalilNomor].ref+" ]";
	pdf.text(
		dalil[dalilNomor].text,
		dalil[dalilNomor].position.x,
		dalil[dalilNomor].position.y,
		{
			maxWidth : dalil[dalilNomor].size.maxWidth,
			align : dalil[dalilNomor].align,
			baseline : dalil[dalilNomor].baseline
		});

	// Masukkan tanda tangan dan cap pada kwitansi

	// Memasukkan tanda tangan penyetor
	if(uploadTtd.penyetor.blobData){
		let scaledImageNumber = 0;

		let imageWidth = uploadTtd.penyetor.maxWidth;

		let imageHeight = uploadTtd.penyetor.heightPt * scaledImageNumber;

		if(uploadTtd.penyetor.widthPt < uploadTtd.penyetor.heightPt){
			scaledImageNumber = uploadTtd.penyetor.maxHeight / uploadTtd.penyetor.heightPt;

			imageWidth = uploadTtd.penyetor.widthPt * scaledImageNumber;

			imageHeight = uploadTtd.penyetor.maxHeight;

		} else {
			scaledImageNumber = uploadTtd.penyetor.maxWidth / uploadTtd.penyetor.widthPt;

			imageWidth = uploadTtd.penyetor.maxWidth;

			imageHeight = uploadTtd.penyetor.heightPt * scaledImageNumber;
		}

		pdf.addImage(uploadTtd.penyetor.blobData, "png", uploadTtd.penyetor.posX+((uploadTtd.penyetor.maxWidth - imageWidth) / 2), 308.4, imageWidth, imageHeight, undefined, "FAST");
	}

	if(uploadCap.penyetor.blobData){
		let scaledImageNumber = 0;

		if(uploadCap.penyetor.widthPt < uploadCap.penyetor.heightPt){
			scaledImageNumber = uploadCap.penyetor.maxWidth / uploadCap.penyetor.heightPt;
		} else {
			scaledImageNumber = uploadCap.penyetor.maxWidth / uploadCap.penyetor.widthPt;
		}

		let imageWidth = uploadCap.penyetor.maxWidth;

		let imageHeight = uploadCap.penyetor.heightPt * scaledImageNumber;

		pdf.addImage(uploadCap.penyetor.blobData, "png", uploadCap.penyetor.posX, uploadCap.penyetor.posY, imageWidth, imageHeight, undefined, "FAST");
	}

	// Memasukkan tanda tangan penerima
	if(uploadTtd.penerima.blobData){
		let scaledImageNumber = 0;

		let imageWidth = uploadTtd.penerima.maxWidth;

		let imageHeight = uploadTtd.penerima.heightPt * scaledImageNumber;

		if(uploadTtd.penerima.widthPt < uploadTtd.penerima.heightPt){
			scaledImageNumber = uploadTtd.penerima.maxHeight / uploadTtd.penerima.heightPt;

			imageWidth = uploadTtd.penerima.widthPt * scaledImageNumber;

			imageHeight = uploadTtd.penerima.maxHeight;

		} else {
			scaledImageNumber = uploadTtd.penerima.maxWidth / uploadTtd.penerima.widthPt;

			imageWidth = uploadTtd.penerima.maxWidth;

			imageHeight = uploadTtd.penerima.heightPt * scaledImageNumber;
		}

		pdf.addImage(uploadTtd.penerima.blobData, "png", uploadTtd.penerima.posX+((uploadTtd.penerima.maxWidth - imageWidth) / 2), 308.4, imageWidth, imageHeight, undefined, "FAST");
	}

	// Memasukkan cap penerima
	if(uploadCap.penerima.blobData){
		let scaledImageNumber = 0;

		if(uploadCap.penerima.widthPt < uploadCap.penerima.heightPt){
			scaledImageNumber = uploadCap.penerima.maxWidth / uploadCap.penerima.heightPt;
		} else {
			scaledImageNumber = uploadCap.penerima.maxWidth / uploadCap.penerima.widthPt;
		}

		let imageWidth = uploadCap.penerima.maxWidth;

		let imageHeight = uploadCap.penerima.heightPt * scaledImageNumber;

		pdf.addImage(uploadCap.penerima.blobData, "png", uploadCap.penerima.posX, uploadCap.penerima.posY, imageWidth, imageHeight, undefined, "FAST");
	}

	// Memasukkan foto kwitansi fisik
	if(uploadKwitansiFisik.blobData){
		console.log("Data upload kwitansi fisik");
		console.log(uploadKwitansiFisik);

		pdf.setFontSize(6);
		pdf.setFont("Lato", 'normal');
		pdf.setTextColor("#000000");
		pdf.text("halaman (1/2)", 297.6, 800, {maxWidth:220, align:"center", baseline:"hanging"});

		pdf.addPage();

		pdf.setFontSize(12);
		pdf.setFont("Lato", 'normal');
		pdf.setTextColor("#000000");
		pdf.text("Foto / Scan Kwitansi Fisik", 297.6, 47.8, {maxWidth:320, align:"center", baseline:"hanging"});

		let scaledImageNumber = uploadKwitansiFisik.maxWidth / uploadKwitansiFisik.widthPt;

		let imageWidth = uploadKwitansiFisik.maxWidth;

		let imageHeight = uploadKwitansiFisik.heightPt * scaledImageNumber;

		pdf.addImage(uploadKwitansiFisik.blobData, "jpg", 39.6, 67.8, imageWidth, imageHeight, undefined, "FAST");

		pdf.setFontSize(6);
		pdf.setFont("Lato", 'normal');
		pdf.setTextColor("#000000");
		pdf.text("halaman (2/2)", 297.6, 800, {maxWidth:220, align:"center", baseline:"hanging"});
	}

	return pdf
}

/*
Susunan Halaman :
Hal 1 : kwitansi digital lazismu dengan ttd digital dan qr di pojok bawah
Hal 2 : scan kwitansi
Hal 3 : penghitung uang
Hal 4 dst : promosi
*/

/*
Susunan Halaman versi 2 :
Hal 1 : kwitansi digital lazismu dengan ttd digital dan qr di pojok bawah dan scan kwitansi dengan ukuran yang di scale
Hal 2 : penghitung uang
Hal 3 dst : promosi
*/