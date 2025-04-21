function fncLabelWithDateWithDefaultButtonMaker(eTarget, eObject){
	let target = document.getElementById(eTarget);

	let mainDiv = document.createElement("div");
	mainDiv.setAttribute("class","row mb-1 laz-margin-auto justify-content-center");

	let label = document.createElement("label");
	label.setAttribute("for", eObject.id);
	label.setAttribute("class","col-11 col-sm-3 col-md-2 col-lg-2 col-xl-2 text-xl-right col-form-label col-form-label-sm");
	label.innerText = eObject.labelText;

	let divInput = document.createElement("div");
	divInput.setAttribute("class","col-11 col-sm-6 col-md-5 col-lg-4 col-xl-3");

	let divInputGroup = document.createElement("div");
	divInputGroup.setAttribute("class","input-group");

	let inputDate = document.createElement("input");
	inputDate.id = eObject.inputId;
	inputDate.setAttribute("type", eObject.typeInput);
	inputDate.setAttribute("class","form-control form-control-sm");

	let divInputButton = document.createElement("div");
	divInputButton.setAttribute("class","input-group-append");

	let buttonReset = document.createElement("button");
	buttonReset.id = eObject.resetId;
	buttonReset.setAttribute("class","btn btn-sm");
	buttonReset.type="button";
	buttonReset.innerHTML = "<b>&#8634</b>";

	divInputButton.appendChild(buttonReset);

	divInputGroup.appendChild(inputDate);
	divInputGroup.appendChild(divInputButton);

	divInput.appendChild(divInputGroup);

	mainDiv.appendChild(label);
	mainDiv.appendChild(divInput);

	target.appendChild(mainDiv);
}

function fncSvgTextToForeign(eObject){
	console.log(eObject.id);
	let text = document.createElement("div");

	text.id = eObject.id;
	text.style.fontFamily = eObject.style.fontFamily;
	text.style.fontSize = eObject.style.fontSize;
	text.style.fontStyle = eObject.style.fontStyle;
	text.style.fontWeight = eObject.style.fontWeight;

	text.style.position = eObject.style.position;

	text.style.letterSpacing = eObject.style.letterSpacing;
	text.style.lineHeight = eObject.style.lineHeight;
	text.style.wordSpacing = eObject.style.wordSpacing;

	text.style.left = eObject.style.left;
	text.style.top = eObject.style.top;

	text.innerText = eObject.labelText;
	

	return text;
}

function fncSvgImageToContainer(eObject){
	let image = document.createElementNS("http://www.w3.org/2000/svg", "image");
	image.id = eObject.id;
	image.setAttributeNS(null,"width", ""+eObject.style.width);
	image.setAttributeNS(null,"height", ""+eObject.style.height);
	image.setAttributeNS(null,'x',""+eObject.style.x);
	image.setAttributeNS(null,'y',""+eObject.style.y);
	image.setAttributeNS('http://www.w3.org/1999/xlink','href', eObject.imageBlob);

	return image;
}

function fncSvgForeignBox(eObject){
	let box = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
	box.id = eObject.id;
	box.setAttributeNS(null, "x", "0");
	box.setAttributeNS(null, "y", "0");
	box.setAttributeNS(null, "width", ""+eObject.style.width);
	box.setAttributeNS(null, "height", ""+eObject.style.height);

	return box;
}

function fncSvgBoxToForeign(eObject){
	// correctionPage("#000000", "100px", "100px", "100px", "100px", 1)
	let box = document.createElement("div");
	box.id = eObject.id;

	box.style.backgroundColor = eObject.style.backgroundColor;
	box.style.opacity = eObject.style.opacity;
	box.style.position = eObject.style.position;

	box.style.width = eObject.style.width;
	box.style.height = eObject.style.height;
	box.style.top = eObject.style.top;
	box.style.left = eObject.style.left;

	return box;
}

function fncTextToDiv(eObject){
	let text = document.createElement("div");

	text.setAttribute("contenteditable","true");

	text.id = eObject.id;
	text.style.fontFamily = eObject.style.fontFamily;
	text.style.fontSize = eObject.style.fontSize;
	text.style.fontStyle = eObject.style.fontStyle;
	text.style.fontWeight = eObject.style.fontWeight;

	text.style.position = eObject.style.position;

	text.style.letterSpacing = eObject.style.letterSpacing;
	text.style.lineHeight = eObject.style.lineHeight;
	text.style.wordSpacing = eObject.style.wordSpacing;

	text.style.height = "0px";

	if(eObject.style.width != undefined){
		text.style.width = eObject.style.width;

		if(eObject.style.textAlign != undefined){
			text.style.textAlign = eObject.style.textAlign;
		}
	}

	text.style.left = eObject.style.left;
	text.style.top = eObject.style.top;

	text.innerText = eObject.labelText;

	return text;
}