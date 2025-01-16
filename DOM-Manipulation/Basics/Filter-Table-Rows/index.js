// get the input value
let input = document.querySelector('input');
// get the table
let table = document.querySelector('table');

function searchTable(){
    // loop through the table rows
    // console.dir(table.children[0].children)
    let tableRowsData = table.children[0].children;
    
    for(let i=1; i<tableRowsData.length; i++){
        let rowData = tableRowsData[i].children;
        for(let rowCell of rowData){
            // console.log(rowCell.innerText, input.value)
            if(rowCell.innerText.includes(input.value)){
                tableRowsData[i].style.display = "table-row";
                break;
            }else{
                tableRowsData[i].style.display = "none";
            }
        }
    }
}

// add event listener to input
input.addEventListener('keyup', ()=>{
    searchTable();
})