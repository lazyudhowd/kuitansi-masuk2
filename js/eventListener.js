// Untuk Preview PDF
document.getElementById(formButton.btnPreview.id).addEventListener(
	"click",
	previewPdf,
false);

// Untuk Mendownload PDF
document.getElementById(formButton.btnDownload.id).addEventListener(
	"click",
	downloadPdf,
false);

// ============================================
// Untuk upload gambar kwitansi fisik
document.getElementById(formButton.btnUploadKwitansiFisik.idActualBtn).addEventListener(
	"change",
	function(){setUploadUploadImage(this, uploadKwitansiFisik)},
false);

document.getElementById(formButton.btnUploadKwitansiFisik.idDisplayBtn).addEventListener("click", function(){
	document.getElementById(formButton.btnUploadKwitansiFisik.idActualBtn).click();
	this.blur();
});
// ============================================

// Untuk mengeset uang total dan terbilang secara otomatis
document.getElementById(formButton.btnAutoHitung.id).addEventListener("click", function(){
	hitungOtomatisTotalTerbilang();
	this.blur();
});

// untuk mereset form
document.getElementById(formButton.btnResetForm.id).addEventListener("click", function(){
	resetForm();
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	this.blur();
});

// untuk isi form dengan nilai default
document.getElementById(formButton.btnDefaultValue.id).addEventListener("click", function(){
	setFormDefaultValue();
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	this.blur();
});

// ============================================
// Untuk upload cap penerima
document.getElementById(formButton.btnUploadCapPenerima.idActualBtn).addEventListener(
	"change",
	function(){setUploadUploadImage(this, uploadCap.penerima)},
false);

document.getElementById(formButton.btnUploadCapPenerima.idDisplayBtn).addEventListener("click", function(){
	document.getElementById(formButton.btnUploadCapPenerima.idActualBtn).click();
	this.blur();
});
// ============================================

// ============================================
// Untuk upload gambar (ttd penerima)
document.getElementById(formButton.btnUploadTtdPenerima.idActualBtn).addEventListener(
	"change",
	function(){setUploadUploadImage(this, uploadTtd.penerima)},
false);

document.getElementById(formButton.btnUploadTtdPenerima.idDisplayBtn).addEventListener("click", function(){
	document.getElementById(formButton.btnUploadTtdPenerima.idActualBtn).click();
	this.blur();
});
// ============================================

// ============================================
// Untuk upload cap penyetor
document.getElementById(formButton.btnUploadCapPenyetor.idActualBtn).addEventListener(
	"change",
	function(){setUploadUploadImage(this, uploadCap.penyetor)},
false);

document.getElementById(formButton.btnUploadCapPenyetor.idDisplayBtn).addEventListener("click", function(){
	document.getElementById(formButton.btnUploadCapPenyetor.idActualBtn).click();
	this.blur();
});
// ============================================

// ============================================
// Untuk upload gambar (ttd penyetor / ttd penyetor / cap penyetor)
document.getElementById(formButton.btnUploadTtdPenyetor.idActualBtn).addEventListener(
	"change",
	function(){setUploadUploadImage(this, uploadTtd.penyetor)},
false);

document.getElementById(formButton.btnUploadTtdPenyetor.idDisplayBtn).addEventListener("click", function(){
	document.getElementById(formButton.btnUploadTtdPenyetor.idActualBtn).click();
	this.blur();
});
// ============================================
