// function toMoney(value){
//     let money = document.getElementById("select")

// if (money.value === "KZT"){
//     let ktou = Math.round(value/431)
//     let ktoe = Math.round(value/509)

//     document.getElementById("usd").innerHTML = ktou.toString
//     document.getElementById("eur").innerHTML = ktoe.toString
//     document.getElementById("kzt").innerHTML = "-"
// }else if (money.value === "USD"){
//     let utok = Math.round(value*429)
//     let utoe = Math.round(value*84.283)/100

//     document.getElementById("usd").innerHTML = "-"
//     document.getElementById("eur").innerHTML = utoe.toString
//     document.getElementById("kzt").innerHTML = utok.toString
// }else if (money.value === "EUR"){
//     let etok = Math.round(value*507)
//     let etod = Math.round(value*117.633)/100

//     document.getElementById("usd").innerHTML = etod.toString
//     document.getElementById("eur").innerHTML = "-"
//     document.getElementById("kzt").innerHTML = etok.toString
// }
// }
// function calculate(value) {
//     let currency = document.getElementById("blmim");
//     if (currency.value === "KZT") {
//         let kztToUsd = Math.round(value * 0.23201856) / 100;
//         let kztToEur = Math.round(value * 0.19646365) / 100;
//         document.getElementById("usd").innerHTML = kztToUsd.toString();
//         document.getElementById("eur").innerHTML = kztToEur.toString();
//         document.getElementById("kzt").innerHTML = "-";
//     } else if (currency.value === "USD") {
//         let usdToKzt = Math.round(value * 42900.0) / 100;
//         let usdToEur = Math.round(value * 84.283) / 100;
//         document.getElementById("kzt").innerHTML = usdToKzt.toString();
//         document.getElementById("eur").innerHTML = usdToEur.toString();
//         document.getElementById("usd").innerHTML = "-";
//     } else if (currency.value === "EUR") {
//         let eurToKzt = Math.round(value * 50700.0) / 100;
//         let eurToUsd = Math.round(value * 117.6335) / 100;
//         document.getElementById("kzt").innerHTML = eurToKzt.toString();
//         document.getElementById("usd").innerHTML = eurToUsd.toString();
//         document.getElementById("eur").innerHTML = "-";
//     }
// }
function toMoney(){
if (document.getElementById("select").value === 'KZT') {
    let money = document.getElementById("money").value;
    let ktou = (money/431);
    let ktoe = (money/509);

    document.getElementById("usd").value = ktou;
    document.getElementById("kzt").value = "-";
    document.getElementById("eur").value = ktoe;

}else if (document.getElementById("select").value === 'USD') {
    let money = document.getElementById("money").value;
    let dtok = money * 429;
    let dtoe = money * 84.2;

    document.getElementById("kzt").value = dtok;
    document.getElementById("usd").value = "-";
    document.getElementById("eur").value = dtoe;

}else if (document.getElementById("select").value === 'EUR') {
    let money = document.getElementById("money").value;
    let etok = money * 507;
    let etou = money * 117.63;

    document.getElementById("kzt").value = etok;
    document.getElementById("eur").value = "-";
    document.getElementById("usd").value = etou;

}
}