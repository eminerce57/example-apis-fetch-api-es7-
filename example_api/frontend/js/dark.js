const Switch = document.getElementById("dark-input") //burada butonu değişkene atıyoruz
Switch.addEventListener("change", (event) => { //burada chage olunca yapacagı komutu yazıyoruz 
    let theme = event.currentTarget.checked // burda butonun acık olup olmadıgını alıyoruz
    darkmode(theme) // burda true veya false degerini fonksiyona atıyoruz
})
darkmode(JSON.parse(localStorage.getItem("dark-theme"))) // burda localstroge den temanın verisini alıyoruz 

function darkmode(theme) {  // fonksiyon 
    localStorage.setItem("dark-theme", theme) // local storage e ekliyoruz temayı 
    if (theme === true) { // temayı değiştiriyoruz dark veya light 
        document.documentElement.setAttribute("data-theme", "dark")
    } else if (theme === false) {
        document.documentElement.setAttribute("data-theme", "light")
    }
    Switch.checked = theme; // butonu resetliyoruz 
}
// not  komutlar asekron şekilde çalışıyor