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