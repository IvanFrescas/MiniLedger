const program = require('commander');
var sprintf = require("sprintf-js").sprintf;

program.version('0.0.1');


// Commands
program
.command('register')
.alias('reg')
.description('List all postings matching the report-query. ')
.action(function() {
    if(FileExist()) {
        const Register = require("./Register");
        Register(array_transactions,program.sort);
    }
})

program
.command('balance [arg...]')
.alias('bal')
.description('Print a balance report showing totals for postings that match report-query, and aggregate totals for parents of those accounts')
.action(function (arg) {
    if(FileExist()) {
        const Balance = require("./Balance");
        Balance(array_transactions,arg);
    }
})

program
.command('print')
.alias('p')
.description('Print out the full transactions of any matching postings')
.action(function () {
    if(FileExist()) {
        const Print = require("./Print");
        Print(array_transactions,program.sort);
    }

})
// Options
program
.option('--price-db' ,'')
.action()

program
.option('-f, --file <path>' ,'Read journal data from FILE.')
.action()


program
.option('-s, --sort <path>' ,'Sort postings by evaluating the given value-expression', 'noOrder')
.action()


program.parse(process.argv);


function FileExist(){    
    
    if (program.file) {
        const parser = require("./parser");
        
        if (program.file == "index.ledger"){
            /* const lineByLine = require('n-readlines');
            const liner = new lineByLine(`ledger-sample-files/${program.file}`);
            let line;
            var includes = []
            var inc;
            while (line = liner.next()) {
                line = line.toString('ascii');

                if(line.startsWith("!include ")) {
                    inc = line.toString().trim()
                    inc = inc.replace("!include ","");
                    includes.push(inc)
                }
            } */
            
            
            
            array_transactions = parser("Income.ledger");
            console.log(array_transactions);
            
            array_transactions2 = parser("Payable.ledger");
            console.log(array_transactions2);
            
            return array_transactions


        } else {
            array_transactions = parser(program.file);
            
            return array_transactions
        }
    } else {
        console.log("Error: No journal file was specified (please use -f) ");   
        return false;
    }    
}

