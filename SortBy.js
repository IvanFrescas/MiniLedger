

var sprintf=require("sprintf-js").sprintf;


function typeSort(array_transactions, typeSort) {
    
    if (typeSort == 'n') {
        return  sortByDescriptionName(array_transactions);
    } if (typeSort == 'd') { 
        return sortByDate(array_transactions);
    }
} 


function sortByDescriptionName(array_transactions) {
    array_transactions.sort(function(a, b) {
        var nameA = a.description.toUpperCase(); 
        var nameB = b.description.toUpperCase(); 
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    }); 
    return array_transactions;
}

function sortByDate(array_transactions) {
    array_transactions.sort(function(a,b) { 
        return new Date(a.date).getTime() - new Date(b.date).getTime() 
    });
    return array_transactions;
}


module.exports = typeSort;
