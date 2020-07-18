const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) =>{
    return new Promise ((resolve,reject)=>{
        if(!Number(base)){
            return reject(`El valor introducido ${base} no es un número`);
        }

        let data = '';
        console.log('=========================='.blue);
        console.log(`===Tabla del ${base}===`.green);
        console.log('=========================='.pink);
        for(let i = 1; i<= limite; i++){
            data += `${base} * ${i} = ${base * i}\n`
        }
        resolve(data);

    })
}

let crearArchivo = (base, limite) =>{
    return new Promise((resolve,reject)=>{
        if(!Number(base)){
            return reject(`El valor introducido ${base} no es un número`)
        }

        let data ='';

        for(let i=1; i <= limite; i ++){
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`);
        });
    })
}

module.exports = {crearArchivo,listarTabla}





