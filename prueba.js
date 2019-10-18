var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var outstream = new stream();

instream = fs.createReadStream("ledger-sample-files/Income.ledger");
var rl = readline.createInterface(instream, outstream);

/* 
  TRANSACTION_RGX      = /\d{4}\/\d{1,2}\/\d{1,2} .+/
  TRANSACTION_DATE_RGX = /\d{4}\/\d{1,2}\/\d{1,2}/
  TRANSACTION_DESC_RGX = /[^\d{4}\/\d{1,2}\/\d{1,2}]+/
  ACCOUNT_DESC_RGX     = /[^\-?\$?\d+\.?\d+$]+/
  ACCOUNT_ACTION_RGX   = /\-?\$?\d+\.?\d?.+/
  ACCOUNT_AMOUNT_RGX   = /[\-.|\d]/
  ACCOUNT_CURRENCY_RGX = /[a-zA-z\$]+/
  COMMENT_RGX          = /[\;#%|*].+/
  INCLUDE_RGX          = /!include .+/
  LEDGER_FILE_RGX      = /[\w\/]+\.ledger$/
*/

let RGX_DATE = /\d{4}\/\d{1,2}\/\d{1,2}/g;
let RGX_DESCRIPCION = /[^\d{4}\/\d{1,2}\/\d{1,2}]+/g
let ACOUNTNAME = /\s\w+:\w+/g
let AMOUNT = /(\s\$\-*\d+.*)|(\s\-*\d+ \w{2,3})/g

// Podria servir si compruebo que empieza con espacio o tab
// para antes de : /(\w+:)/g
// para despues de : (:\w+)
// para dolares y btc /(\$\d*.*)|(\d+ \w{2,3})/



rl.on('line', function(line){
    


     
    
    if(line.match(AMOUNT)) {
        var space = line.match(AMOUNT).shift().trim();
        if (space.startsWith('$')) {
            space = space.replace(/\$/g, '')
            console.log(space)
        } else {
            space = space.split(' ');
            console.log(space);
        }
    } 


   /*  Bloque para obtener nombre 
        if(line.match(ACOUNT)) {
        var space = line.match(ACOUNT);
        console.log(space);
    }
     */
    
    /*
    * Bloque para validar la fecha y descripcion
    if(line.match(RGX_DATE)) {
        var date = line.match(RGX_DATE).shift();
        var desc = line.match(RGX_DESCRIPCION).shift().trim();
        
        console.log(date);
        console.log(desc);
        
    } */
})
