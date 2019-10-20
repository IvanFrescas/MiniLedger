const program = require('commander');

program.version('0.0.1');


// Commands
program
.command('register <args>')
.alias('reg')
.description('List all postings matching the report-query. ')
.action(() => {
    console.log('register')
})

program
.command('balance <args>')
.alias('bal')
.description('Print a balance report showing totals for postings that match report-query, and aggregate totals for parents of those accounts')
.action(function (file) {
    const Balance = require("./Balance");
    Balance(file)   
})

program
.command('print')
.alias('p')
.description('Print out the full transactions of any matching postings')
.action(() => {
    console.log('print')
})
// Options
program
.option('--price-db' ,'')
.action()

program
.option('--file [path] ' ,'Read journal data from FILE.')
.action()


program
.option('-s, --sort' ,'Sort postings by evaluating the given value-expression')
.action((nombre) => {
    console.log(`Hola ${nombre}`)
})



program.parse(process.argv);


