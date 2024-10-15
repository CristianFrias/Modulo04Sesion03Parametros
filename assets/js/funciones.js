// Módulos para importar/exportar funciones
// En las funciones que no tienen nombre debo utilizar la flecha
// Para que pueda ser utilizado desde otro html debemos decir que se exportará con EXPORT
export const saludar = (nombre, apellido = "") => { // el apellido = "N/A" es un valor por defecto de un parametro dentro de una función
    console.log(`Bienvenido ${nombre} ${apellido}`);
}

export const sumar = (...numeros) => { // con ... decimos que vamos a recibir lo que nos envien 
    let suma = 0;
    for (const element of numeros) {
        suma+=element
    }
    return suma
}

export const calcular = (operacion, ...numeros) => {
    console.log("operación", operacion);
    console.log("numeros", numeros);
}