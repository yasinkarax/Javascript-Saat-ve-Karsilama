
let days = [
    "pazar",
    "salı",
    "çarşamba",
    "perşembe",
    "cuma",
    "cumartesi",
    "pazartesi"
];

let isim = prompt("isminiz: ");
document.getElementById('name').innerHTML = isim;
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let day = today.getDay();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('date').innerHTML =  h + ":" + m + ":" + s + " " + days[day];
    setTimeout(startTime, 1000);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }