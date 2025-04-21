function formBuilderTableStyle1_inputText(fObject, fTarget){
	let target = document.getElementById(fTarget);

	let row = document.createElement("tr");

	let collumnLabel = document.createElement("td");
	collumnLabel.setAttribute("class","kolomlabel");
	collumnLabel.innerText = fObject.label;

	let collumnField = document.createElement("td");
	collumnField.setAttribute("class","kolominput");

	let formField = document.createElement("input");
	formField.id = fObject.id;
	formField.setAttribute("type","text");

	collumnField.appendChild(formField);

	row.appendChild(collumnLabel);
	row.appendChild(collumnField);

	target.appendChild(row);
}

function formBuilderTableStyle1_inputTextarea(fObject, fTarget){
	let target = document.getElementById(fTarget);

	let row = document.createElement("tr");

	let collumnLabel = document.createElement("td");
	collumnLabel.setAttribute("class","kolomlabel");
	collumnLabel.innerText = fObject.label;

	let collumnField = document.createElement("td");
	collumnField.setAttribute("class","kolominput");

	let formField = document.createElement("textarea");
	formField.id = fObject.id;

	collumnField.appendChild(formField);

	row.appendChild(collumnLabel);
	row.appendChild(collumnField);

	target.appendChild(row);
}

function formBuilderTableStyle1_inputNumber(fObject, fTarget){
	let target = document.getElementById(fTarget);

	let row = document.createElement("tr");

	let collumnLabel = document.createElement("td");
	collumnLabel.innerText = fObject.label;

	let collumnField = document.createElement("td");

	let formField = document.createElement("input");
	formField.id = fObject.id;
	formField.setAttribute("type","number");

	collumnField.appendChild(formField);

	row.appendChild(collumnLabel);
	row.appendChild(collumnField);

	target.appendChild(row);
}

function formBuilderTableStyle1_inputDatetime(fObject, fTarget){
	let target = document.getElementById(fTarget);

	let row = document.createElement("tr");

	let collumnLabel = document.createElement("td");
	collumnLabel.innerText = fObject.label;

	let collumnField = document.createElement("td");

	let formField = document.createElement("input");
	formField.id = fObject.id;
	formField.setAttribute("type","datetime-local");

	collumnField.appendChild(formField);

	row.appendChild(collumnLabel);
	row.appendChild(collumnField);

	target.appendChild(row);
}

function formBuilderTableStyle1_inputDate(fObject, fTarget){
	let target = document.getElementById(fTarget);

	let row = document.createElement("tr");

	let collumnLabel = document.createElement("td");
	collumnLabel.innerText = fObject.label;

	let collumnField = document.createElement("td");

	let formField = document.createElement("input");
	formField.id = fObject.id;
	formField.setAttribute("type","date");

	collumnField.appendChild(formField);

	row.appendChild(collumnLabel);
	row.appendChild(collumnField);

	target.appendChild(row);
}

function formBuilderTableStyle1_headerMaker(fObject, fTarget){
	let target = document.getElementById(fTarget);

	let row = document.createElement("tr");

	let collumnHeader = document.createElement("td");
	collumnHeader.setAttribute("colspan","2");
	collumnHeader.setAttribute("align","center");
	collumnHeader.setAttribute("class","kolom-header")

	let header = document.createElement("h"+fObject.headerLevel);
	header.id = fObject.id;
	header.innerText = fObject.label;

	// if(fObject.styleClass){
	// 	header.setAttribute("class",fObject.styleClass);
	// }

	collumnHeader.appendChild(header);

	row.appendChild(collumnHeader);

	target.appendChild(row);
}

function formBuilderTableStyle1_buttonMaker(fObject, fTarget){
	let target = document.getElementById(fTarget);

	let row = document.createElement("tr");

	let collumnButton = document.createElement("td");
	collumnButton.setAttribute("colspan","2");
	collumnButton.setAttribute("align","center");

	let btn = document.createElement("button");
	btn.id = fObject.id;
	btn.setAttribute("type","button");
	btn.innerText = fObject.label;

	if(fObject.btnStyle){
		btn.setAttribute("class",fObject.btnStyle);
	}

	collumnButton.appendChild(btn);

	row.appendChild(collumnButton);

	target.appendChild(row);
}

function formBuilderTableStyle1_inputButtonUploadMaker(fObject, fTarget){
	let target = document.getElementById(fTarget);

	let row = document.createElement("tr");

	let collumnButton = document.createElement("td");
	collumnButton.setAttribute("colspan","2");
	collumnButton.setAttribute("align","center");

	let btnActual = document.createElement("input");
	btnActual.id = fObject.idActualBtn;
	btnActual.setAttribute("type","file");
	btnActual.style.display = 'none';
	// btnActual.innerText = fObject.label;

	let btnDisplay = document.createElement("button");
	btnDisplay.id = fObject.idDisplayBtn;
	btnDisplay.setAttribute("type","button");
	btnDisplay.innerText = fObject.label;

	console.log(fObject.btnStyle)

	if(fObject.btnStyle){
		btnDisplay.setAttribute("class", fObject.btnStyle);
	}

	collumnButton.appendChild(btnActual);
	collumnButton.appendChild(btnDisplay);

	row.appendChild(collumnButton);

	target.appendChild(row);
}

function tester_valueFormSetter(fObject, fValue){
	let target = document.getElementById(fObject.id)
	target.value = fValue
}