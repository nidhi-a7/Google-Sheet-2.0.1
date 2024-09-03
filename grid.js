let rows = 100;
let cols = 26;

let addressRowCont = document.querySelector(".address-row-cont");
let addressColCont = document.querySelector(".address-col-cont");
let cellsCont = document.querySelector(".cells-cont");
let addressBar = document.querySelector(".address-bar");

for (let i = 0; i < rows; i++) {
  let addressRow = document.createElement("div");
  addressRow.innerText = i + 1;
  addressRow.setAttribute("class", "address-row")
  addressRowCont.appendChild(addressRow);
}
for (let i = 0; i < cols; i++) {
  let addressCol = document.createElement("div");
  addressCol.innerText = String.fromCharCode(i + 65);
  addressCol.setAttribute("class", "address-col");
  addressColCont.appendChild(addressCol);
}
for (let i = 0; i < rows; i++) {
  let rowCont = document.createElement("div");
  rowCont.setAttribute("class", "row-cont")
  for (let j = 0; j < cols; j++) {
    let cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    cell.setAttribute("contenteditable", true);
    rowCont.appendChild(cell);
    adressDisplay(cell, i, j);
  }
  cellsCont.appendChild(rowCont);
}

function adressDisplay(cell, i, j) {
  cell.addEventListener("click", (e) => {
    let rowID = i + 1;
    let colID = String.fromCharCode(j + 65);
    addressBar.value = `${colID}${rowID}`;
  })
}