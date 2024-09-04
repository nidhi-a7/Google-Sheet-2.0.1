//storage 
let sheetDB = [];

for (let i = 0; i < rows; i++) {
  let sheetRow = [];
  for (let j = 0; j < cols; j++) {
    let cellProp = {
      bold: false,
      italic: false,
      underline: false,
      alignment: "left",
      fontFamily: "monospace",
      fontSize: "14",
      BGcolor: "#000000",
      textColor: "#000000" //for indication purpose
    }
    sheetRow.push(cellProp);
  }
  sheetDB.push(sheetRow);
}
//selectors for cell properties

let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
let fontFamily = document.querySelector(".font-family-prop");
let fontSize = document.querySelector(".font-size-prop");
let fontColor = document.querySelector(".font-color-prop");
let BGcolor = document.querySelector(".BGcolor-prop");
let alignment = document.querySelectorAll(".alignment");
let leftAlign = alignment[0];
let centerAlign = alignment[1];
let rightAlign = alignment[2];

//application of two-way binding
//adding property listener
let activeColorProp = "#d1d8e0";
let inactiveColorProp = "#ecf0f1";

bold.addEventListener("click", (e) => {
  let address = addressBar.value;
  let [cell, cellProp] = activeCell(address);

  //modification 
  cellProp.bold = !cellProp.bold; //data change
  cell.style.fontWeight = cellProp.bold ? "bold" : "normal"; //UI change part-1
  bold.style.backgroundColor = cellProp.bold ? activeColorProp : inactiveColorProp; //UI Change part-2
})

italic.addEventListener("click", (e) => {
  let address = addressBar.value;
  let [cell, cellProp] = activeCell(address);

  //modification 
  cellProp.italic = !cellProp.italic; //data change
  cell.style.fontStyle = cellProp.italic ? "italic" : "normal"; //UI change part-1
  italic.style.backgroundColor = cellProp.italic ? activeColorProp : inactiveColorProp; //UI Change part-2
})

underline.addEventListener("click", (e) => {
  let address = addressBar.value;
  let [cell, cellProp] = activeCell(address);

  //modification 
  cellProp.underline = !cellProp.underline; //data change
  cell.style.textDecoration = cellProp.underline ? "underline" : "none"; //UI change part-1
  underline.style.backgroundColor = cellProp.underline ? activeColorProp : inactiveColorProp; //UI Change part-2
})

function activeCell(address) {
  let [rid, cid] = decodingRIDCIDfromAddress(address);
  let cell = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`);
  let cellProp = sheetDB[rid][cid];
  return [cell, cellProp];
}

function decodingRIDCIDfromAddress(address) {
  // address : "A1"
  let rid = Number(address.slice(1)) - 1;   //"1"->0
  let cid = Number(address.charCodeAt(0)) - 65;
  return [rid, cid];
}