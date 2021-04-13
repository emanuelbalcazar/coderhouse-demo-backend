// declaramos nuestra funcion
function mayor(a, b, callback) {
    if (!a && !b)
        return callback('debe ingresar dos numeros');

    let mayor = (a >= b) ? a : b;

    return callback(null, mayor);
}

// llamamos a la funcion tomando los valores de la linea de comandos
mayor(process.argv[2], process.argv[3], (error, result) => {
    console.log(error, result);
});
