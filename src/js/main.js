
function juros() {
    const nome = document.getElementById("nome").value;
    const mensal =  parseFloat(document.getElementById("mensal").value);
    const meses = parseInt(document.getElementById("meses").value);
    const taxa = parseFloat(document.getElementById("juros").value);
    const result = document.getElementById("result")
    let vf = mensal * ((((1 + (taxa / 100)) ** meses) -1 ) / (taxa / 100))
    
    result.textContent = `${nome}, se você aplicar R$${mensal}, a taxa de juros de ${taxa}% ao mes, durante ${meses} meses, acumulara uma poupança de R$${vf.toFixed(2)}`
}
 