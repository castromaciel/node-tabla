const fs = require('fs')
const colors = require('colors')
const crearArchivo = async( base = 5 , l = false, top = 10) =>{

  try {
    let salida=''; 
    let consola='';

    for (let i = 1; i <= top; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;

      consola += `${base} ${colors.gray('x')} ${i} ${colors.gray('=')} ${base * i}\n`;

    }
    if(l){
      console.log('==============='.green);
      console.log(` TABLA DEL ${base}   `.blue)
      console.log('==============='.green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
    return `tabla-${base}.txt `
  
  } catch (error) {
    throw error;
  }
}

module.exports = { crearArchivo }