


getUserData()
function getUserData(){


let rows;
request.get("https://localhost:5001/WeatherForecast").then((response)=>{
console.log(response)
response.forEach(data => {

rows +=`
<tr>
<td>${data.date}</td>
<td>${data.summary}</td>
<td>${data.temperatureC}</td>
<td>${data.temperatureF}</td>
<td>
<button onclick="dangerAlert('${data.date} ${data.summary} ')" class="btn btn-danger t-button"><i class="fa-solid fa-trash-can"></i></button>
<button onclick="updateModal('${data.date}','${data.summary}','${data.temperatureC}')" class="btn btn-info t-button "><i class="fa-solid fa-pen"></i></button>
</td>

</tr>

`

});

setTableSearch("table_id", rows)
}).catch((error)=>{

console.log(error)
})



}




function dangerAlert(name){
  if(name == undefined){
    
    name="?"

  }

  Swal.fire({
    title: `Do you want to delete ${name}`,
    background: '#19191A',
    showDenyButton: true,
    confirmButtonText: 'Yes',
    denyButtonText: 'No',
    customClass: {
      actions: 'my-actions',
      denyButton: 'order-3',
      confirmButton: 'order-2',
    
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('not saved', '', 'info')
    }
  })


}


function updateModal(name,surname,salary){
  $("#Modal").modal();
  document.getElementById("name").value =name
  document.getElementById("surname").value =surname
  document.getElementById("salary").value =salary
}



function setTableSearch(tblName, rows = null, callback = null, options = null) {

  let tableId = `#${tblName}`;
  $(`${tableId} tbody`).empty();

  // Daha once tablo olusturulmus ise yok edilir
  if ($.fn.dataTable.isDataTable(tableId)) {
      $(tableId).DataTable().destroy();
  }
  $(`${tableId} tbody`).html(rows);



  // Varsayilan secenekler
  let defaultOptions = {
      "pageLength": 25,
      "retrieve": true,
      "deferRender": false,
      "destroy": true,
      "dom": 'Bfrtip',
      "language": {
          "emptyTable": "Herhangi veri bulunmamaktadır."
      },
 
   
  }

  // Extra secenekler bulundugu halde

  var table = $(tableId).DataTable(defaultOptions);

  if (callback) {
      callback();
  }
}