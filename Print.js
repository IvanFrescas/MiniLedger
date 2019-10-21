var Print = (array_transactions, typeSort) => {

    var sprintf = require("sprintf-js").sprintf;
    const sortBy = require("./SortBy");

    // const parser = require("./parser");
    // array_transactions = parser(file);


    sortBy(array_transactions, typeSort);
    //    console.log(sprintf("%5j",array_transactions));

    for (transaccion in array_transactions) {
        var movements = (array_transactions[transaccion]["movements"].length);
        
        var date = array_transactions[transaccion].date
        var description = array_transactions[transaccion].description
        console.log();
        console.log(sprintf("%5s %5s", date, description));
        
        for (var i=0; i<movements; i++) {
            var amount = array_transactions[transaccion]["movements"][i]["amount"]; 
            var curr = array_transactions[transaccion]["movements"][i]["currency"];        
            var desc = array_transactions[transaccion]["movements"][i]["description"];
            
            console.log('   ' +sprintf("%-20s %40s", desc, `${curr} ${amount}`));
        }
    }
}

module.exports = Print;