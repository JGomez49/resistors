
document.getElementById('btnSeries').addEventListener('click', ()=>{
    let config = 'Series';
    let r1 = parseFloat(document.getElementById('R1').value);
    let r2 = parseFloat(document.getElementById('R2').value);
    let rt = (r1+r2);
    addNewRow(config,r1,r2,rt);
})

document.getElementById('btnParallel').addEventListener('click', ()=>{
    let config = 'Parallel';
    let r1 = parseFloat(document.getElementById('R1').value);
    let r2 = parseFloat(document.getElementById('R2').value);
    let rt = (1/((1/r1)+(1/r2)));
    addNewRow(config,r1,r2,rt);
})

function addNewRow(config,r1,r2,rt) {
    let R1 = r1.toFixed(2);
    let R2 = r2.toFixed(2);
    let RT = rt.toFixed(2);
    var tableRef = document.getElementById('Table').getElementsByTagName('tbody')[0];
    let r = tableRef.rows.length +1;
    // var newRow = tableRef.insertRow(tableRef.rows.length);
    var newRow = tableRef.insertRow(-1);
    var myHtmlContent = `<tr class="table-success">
                            <th scope="row">${r}</th>
                                <td>${config}</td>
                                <td>${R1}</td>
                                <td>${R2}</td>
                                <td>${RT}</td>
                        </tr>`
    newRow.innerHTML = myHtmlContent;
    document.getElementById('R1').value = rt.toFixed(2);
    document.getElementById('R2').value = "";
}