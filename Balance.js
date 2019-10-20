const Balance = (file) => {
    
    var sprintf=require("sprintf-js").sprintf;
    
    const parser = require("./parser");
    array_transactions = parser(file);
    //  console.log(JSON.stringify(array_transactions));

    var balanceContent = {}
    var movs = [];
    var mov = [];


    for (transaccion in array_transactions) {
        var movements = (array_transactions[transaccion]["movements"].length);
        
        for (var i=0; i<movements; i++) {
            var amount = array_transactions[transaccion]["movements"][i]["amount"]; 
            var curr = array_transactions[transaccion]["movements"][i]["currency"];        
            var desc = array_transactions[transaccion]["movements"][i]["description"];

            if (balanceContent.hasOwnProperty(desc)) {
                balanceContent[desc][0] += amount
            } else {
                balanceContent[desc] = [amount, curr]
            }
        }
        
    }

    var sumas = {}
    var tipoDeMoneda;
    
    keys = Object.keys(balanceContent);

    for (var i in keys) {
        tipoDeMoneda = balanceContent[keys[i]][1]
        if (sumas.hasOwnProperty(tipoDeMoneda)){
            sumas[tipoDeMoneda] += balanceContent[keys[i]][0]
        } else {
            sumas[tipoDeMoneda] = balanceContent[keys[i]][0]
        }
    }  
    
    for (var i in keys){
        var cantidad = `${balanceContent[keys[i]][1] } ${ balanceContent[keys[i]][0]}`;
        console.log(sprintf("%20s %5s",  cantidad, keys[i])); 
    };
    console.log('--------------------')
    
    for (var key in sumas) {
        if (sumas.hasOwnProperty(key)) {           
            console.log(sprintf("%20s %5s",key, sumas[key]));
        }
    }
}

module.exports = Balance;