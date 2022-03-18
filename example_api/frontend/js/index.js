const request = new Request;




request.get("https://localhost:44354/WeatherForecast").then(response => {
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

})