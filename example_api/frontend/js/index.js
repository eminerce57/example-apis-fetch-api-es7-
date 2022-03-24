const request = new Request;




request.get("https://localhost:5001/WeatherForecast").then(response => {
    let table_body = document.getElementById("tbody")
    response.forEach(data => {
        table_body.innerHTML += `
        <tr>
       
        <td>${data.summary}</td>
        <td>${data.temperatureC}</td>
        <td>${data.temperatureF}</td> 
        <th>${data.date}</th>
        </tr>
        
        `
    });

    UIError("success", "success")
}).catch(error => {

    UIError(error, "danger")
})

function UIError(error, color) {
    const area = document.getElementById("alert-area")


    area.innerHTML = `
    <div class="alert alert-${color} mt-3">
    ${error}
    </div>
    
    `
    setTimeout(() => {

        area.innerHTML = ""
    }, 3000)


}