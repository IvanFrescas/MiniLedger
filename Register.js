const Register = (array_transactions, typeSort) => {

    var sprintf=require("sprintf-js").sprintf;
    
    // const parser = require("./parser");
    // array_transactions = parser(file);

    const sortBy = require("./SortBy");
    sortBy(array_transactions, typeSort);


    //  console.log(sprintf("%5j",array_transactions));
    
    var registerContent = [];
    var sumas = {};
    var valoresTotales = []; 
    for (transaction in array_transactions) {
        var movements = (array_transactions[transaction]["movements"].length);
        var date = (array_transactions[transaction]["date"])
        date = date.replace(/\//g,'-');
        var description = (array_transactions[transaction]["description"])
        
        console.log(`${date} ${description}`)


        
        for (var i=0; i<movements; i++) {
            var amount = array_transactions[transaction]["movements"][i]["amount"]; 
            var curr = array_transactions[transaction]["movements"][i]["currency"];        
            var desc = array_transactions[transaction]["movements"][i]["description"];
            
            if (sumas.hasOwnProperty(curr)){
                sumas[curr] += amount;
            } else {
                sumas[curr] = amount;    
            }
            valoresTotales.push(sumas[curr]);
            
            var movement = [desc,amount,curr]
            registerContent.push(movement);
            
            console.log(sprintf("%50s %10s %1.2f %20s %1.2f",desc, curr, amount, curr, sumas[curr]));
        }    
        
        for (i in sumas) {
            console.log(sprintf("%88s %1.2f", i,  sumas[i]));
        }
    }
}

module.exports = Register