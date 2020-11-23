var mes = ['','janeiro','fevereiro','março', 'abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']

function getDate(value){
    value = value.split('-');
    value = value[2]+' de '+mes[parseInt(value[1],10)]+' de '+value[0]
    return value;
}
function update(){
    var value = document.getElementById("dt-date").value;
    if(value){
        document.getElementById("dt-result").innerHTML = "Descrição (data):" + getDate(value);
    } else {
        document.getElementById("dt-result").innerHTML = "Informe a data, por favor.";
    }
}