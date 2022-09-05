let userName = prompt("Kullanıcı adınızı giriniz:")
let change = document.querySelector("#myName")
change.innerHTML = userName


let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
function clockfunc() {
    let tarih = new Date();
    let d = days[tarih.getDay()];
    let h = tarih.getHours();
    let m = tarih.getMinutes();
    let s = tarih.getSeconds();
    let saat = document.querySelector("#myClock")
    saat.innerHTML = `${h}:${m}:${s} ${d}`
}

setInterval(clockfunc, 1000); // 1000 mili saniyede yenileme yapacak 1sn yani