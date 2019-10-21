# MiniLedger
A simple implementation of the ledger cli

## Getting Started
To get a local copy up and running follow these simple steps.

1. Install npm
```sh
npm install npm@latest -g
```
2. Insall node js
```sh
https://nodejs.org/en/download/
```
3. Clone the repo
```sh
git clone https://github.com/IvanFrescas/MiniLedger
```
4. Install NPM packages
```sh
npm install
```



### Some basic commands are
```
node index.js register -f "File_name.ledger"              //List all postings matching the file.
node index.js register --sort d -f "File_name.ledger"     //List all postings matching the file sorted by date.
node index.js register --sort n -f "File_name.ledger"     //List all postings matching the file sorted by description name.
node index.js balance [arg...] -f "File_name.ledger"      //Print a balance report showing totals for postings that match report-query, and aggregate totals for parents of those accounts
node index.js print -f "File_name.ledger"                 //Print out the full transactions

```


