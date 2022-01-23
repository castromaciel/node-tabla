const argv = require('yargs')
  .option('b',{
    alias: 'base',
    type:'number',
    demandOption:true,
    describe: 'It is the base from the table'
  })
  .option('l',{
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Show the table in console'
  })
  .option('t',{
    alias: 'to',
    type: 'number',
    default: 10,
    describe: 'Limit for the table'
  })
  .check( (argv, options) => {
    if( isNaN( argv.b ) ) throw 'la base debe ser un numero'
    
    if ( isNaN( argv.t ) ) throw 'The limit must be a number'
    
    return true;
  })
  .argv;

  module.exports = argv