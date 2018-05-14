tableArea=document.getElementById("create");

btCommit=document.getElementById("commit");

var select1=document.getElementById("select1");

var numOfRow=0;

var numOfColumn=0;

var tables={name:[],contentOfTable:[]};

var select2=document.getElementById("select2");

let currentTable=0;






function createTableSelected(){
    tableArea.innerHTML='<input type="text" id="nameOfTable" placeholder="Table Name">'+
        '<input type="number" id="numOfColumn" placeholder="Column Numbers">';
    let create2=document.getElementById('create2');
    create2.innerHTML='';
    btCommit.style.display='none';
}

function addRowSelected(){
    btCommit.style.visibility='visible';
    let create2=document.getElementById("create2");
    create2.innerHTML='';
    let innerHtml='';
for(let i=0;i<numOfColumn;i++){
    let attribute=i+1;
    innerHtml=innerHtml+'<input type="text" class="attr" placeholder='+'"attribute'+attribute+'"'+'>';
}
tableArea.innerHTML=innerHtml;
}


function addRowCommitted(){
    currentTable=select2.selectedIndex-1;
    let table=tables.contentOfTable[currentTable];

    let contents=document.getElementsByClassName("attr");
    let row=[];
    for(let i=0;i<numOfColumn;i++){
        let content=contents[i].value;
        row.splice(row.length,0,content);
    }
    table.splice(table.length,0,row);
    let tableToShow=document.getElementById('showTable');
    tableToShow.innerHTML='';
    showTable();
}

function showTable() {
    currentTable=select2.selectedIndex-1;
    let table=tables.contentOfTable[currentTable];
    numOfRow=table.length;
let tableShowed=document.getElementById("showTable");

for(let i=0;i<numOfRow;i++){
    if(i===0) {
        let newRow = tableShowed.insertRow(i);
        newRow.id='head';
        for (let j = 0; j < numOfColumn; j++) {
            let newCell = newRow.insertCell(j);
            newCell.innerText = table[i][j];
        }
    }
    else{
    let newRow=tableShowed.insertRow(i);
    for(let j=0;j<numOfColumn;j++){
        let newCell=newRow.insertCell(j);
        newCell.innerText=table[i][j];
        if(j%2===0){
        newCell.className='even';
    }
    else{
        newCell.className='odd';
        }
    }
    }
}
}

function createColumns() {
    btCommit.style.visibility='visible';
    numOfColumn=document.getElementById('numOfColumn').value;
    // let row=[];
    if(numOfColumn!==0) {
        let innerHtml = '';
        for (let i = 0; i < numOfColumn; i++) {

            let attribute=i+1;
            // let content="attribute"+attribute;
            // row.splice(row.length,0,content);
            innerHtml = innerHtml + '<input type="text" class="nameOfHead" placeholder='+'"Attribute'+attribute+'"'+'>';
        }
        // table.splice(table.length,0,row);
        let create2=document.getElementById("create2");
        create2.innerHTML=innerHtml;
        btCommit.style.display="inline";

    }
}

function createColumnCommitted(){
    let tableToShow=document.getElementById('showTable');
    tableToShow.innerHTML='';
    let row=[];
    let table=[];
    let cells=document.getElementsByClassName("nameOfHead");
    for(let i=0;i<numOfColumn;i++){
        let cell=cells[i].value;
        row.splice(row.length,0,cell);
    }
    table.splice(0,0,row);
    numOfRow=1;
    let nameOfTable=document.getElementById('nameOfTable').value;
    tables.name.splice(tables.name.length,0,nameOfTable);
    tables.contentOfTable.splice(tables.contentOfTable.length,0,table);

    let select2=document.getElementById("select2");
    let innerHtml='<option class="optionsOfSelect2" selected="selected">'+nameOfTable+'</option>';
    select2.innerHTML=select2.innerHTML+innerHtml;
    showTable();
}

function deleteRowSelected(){
    btCommit.style.visibility='visible';
    let create2=document.getElementById('create2');
    create2.innerHTML='';
    currentTable=select2.selectedIndex-1;
    let table=tables.contentOfTable[currentTable];
    let innerHtml='';
    for(let i=0;i<table[0].length;i++){
        let attribute=i+1;
        innerHtml=innerHtml+'<input type=text class="contentToDelete" placeholder='+'"attribute'+attribute+'"'+'>';
    }

    tableArea.innerHTML=innerHtml;
}

function deleteRowCommitted() {
    currentTable = select2.selectedIndex-1;
    let table = tables.contentOfTable[currentTable];
    let deleteInputGroup = document.getElementsByClassName('contentToDelete');
    let rowsToSearch = [];
    for (let i = 1; i < table.length; i++) {
        rowsToSearch.splice(rowsToSearch.length, 0, i);
    }
    for (let i = 0; i < deleteInputGroup.length; i++) {
        let deleteInput = deleteInputGroup[i].value;
        let rowsToDelete = [];
        for (let j = 0; j < rowsToSearch.length; j++) {
            if (deleteInput !='') {
                let k = rowsToSearch[j];
                if (table[k][i] !== deleteInput) {
                    rowsToDelete.splice(rowsToDelete.length, 0, j);
                }
                for (let j = 0; j < rowsToDelete.length; j++) {
                    let k = rowsToDelete[j];
                    rowsToSearch.splice(k, 1);
                }
            }
        }
        if (i === deleteInputGroup.length-1 && rowsToSearch.length !== 0) {
            let tableShowed=document.getElementById("showTable");
            for (let a = 0; a < rowsToSearch.length; a++) {
                let row = rowsToSearch[a];
                table.splice(row,1);
                tableShowed.deleteRow(row);
            }
        }
    }


}

function deleteTableSelected() {
    btCommit.style.visibility='visible';
    tableArea.innerHTML='';
    let create2=document.getElementById("create2");
    create2.innerHTML="";
    alert("You cannot undo this action!");
}

function deleteTableCommitted(){
    let showTable=document.getElementById("showTable");
    showTable.innerHTML='';
    currentTable=select2.selectedIndex-1;
    tables.contentOfTable.splice(currentTable,1);
    tables.name.splice(currentTable,1);
    select2.remove(currentTable+1);
let options=document.getElementsByClassName("optionsOfSelected2");
if(options.length>1) {
    let optionToShow = options[1];
    optionToShow.select = true;
}
else{
    let optionToShow=options[0];
        optionToShow.select=true;
    }

}

select1.onchange=function () {
    let index = select1.selectedIndex;
    switch (index) {
        case 0:
            tableArea.innerHTML='';
            btCommit.style.display="none";
            break;
        case 1:
            createTableSelected();
            document.getElementById('numOfColumn').addEventListener(
                "blur", createColumns, false
            );
            btCommit.addEventListener("click", createColumnCommitted, false);
            break;
        case 2:
            addRowSelected();
            btCommit.addEventListener("click", addRowCommitted, false);
            break;
        case 3:
            deleteRowSelected();
            btCommit.addEventListener("click",deleteRowCommitted,false);
            break;
        case 4:
            deleteTableSelected();
            btCommit.addEventListener("click",deleteTableCommitted,false);
            break;

    }
};

select2.onchange=function () {
    let tableToShow=document.getElementById('showTable');
    tableToShow.innerHTML='';
    showTable();
};

