class Usuario {
    constructor(nombreUsuario, apellidoUsuario, edadUsuario ){
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
        this.edadUsuario = edadUsuario;
    }
    // metodo de la clase para validar el login
    validar() {
        const regexNombreApellido = /^[a-zA-Z]+$/;

        if (typeof this.nombreUsuario === 'string' && typeof this.apellidoUsuario === 'string' && !isNaN(this.edadUsuario) && this.edadUsuario >= 18) {
            if (regexNombreApellido.test(this.nombreUsuario) && regexNombreApellido.test(this.apellidoUsuario)) {
                for (let property in this) {
                    dataOfUser.push(this[property]); 
                } // metodo de array dentro del (for...in) para iterar las propiedades de la clase y a su vez enviarlas al array. Unicamente si se cumple el condicional.
                alert("Bienvenido " + this.nombreUsuario + " podes ingresar a tu cuenta :D");
            } else {
                alert('Ingrese un nombre y un apellido validos');
            }
        } else if (isNaN(this.edadUsuario)) {
            alert('Ingrese una edad valida');
        } else {
            const añosFaltantes = 18 - this.edadUsuario;
            alert('Te faltan ' + añosFaltantes + ' años para registrarte'); 
        }
    }
}
// guardando en constantes los datos del usuario.
const nombreUsuario = prompt('Ingrese su nombre');
const apellidoUsuario = prompt('Ingrese su apellido');
const edadUsuario = parseInt(prompt('Ingrese su edad'));

let usuario1 = new Usuario (nombreUsuario, apellidoUsuario, edadUsuario); // declarando una instancia con los datos
let dataOfUser = []; 
usuario1.validar(); // aplicandole el metodo a la instancia
console.log(dataOfUser); // mostrando en consola el array con los datos del usuario

// bucle 

let carrito = [];

let ropa;
while (ropa !== 'salir') {
    ropa = prompt('Ingrese la prenda que le interesa y le diremos su precio \n "remera" \n "pantalon" \n "zapatillas" \n "buzo" \n "gorra" \n para salir ingrese la palabra salir.');
    // opciones de ropa
    let precioPrenda;
    switch(ropa) {
        case 'remera':
            precioPrenda = prompt('la remera cuesta $9000 ¿deseas comprarla? si/no');
            if(precioPrenda.toLowerCase() === 'si'){
                carrito.push(9000);
            }
            break;
        case 'pantalon':
            precioPrenda = prompt('el pantalon cuesta $40000 ¿deseas comprarlo? si/no');
            if(precioPrenda.toLowerCase() === 'si'){
                carrito.push(40000);
            }
            break;
        case 'zapatillas':
            precioPrenda = prompt('las zapatillas cuestan $189000 ¿deseas comprarlas? si/no');
            if(precioPrenda.toLowerCase() === 'si'){
                carrito.push(189000);
            }
            break;
        case 'buzo':
            precioPrenda = prompt('el buzo cuesta $50000 ¿deseas comprarlo? si/no');
            if(precioPrenda.toLowerCase() === 'si'){
                carrito.push(50000);
            }
            break;
        case 'gorra':
            precioPrenda = prompt('la gorra cuesta $10000 ¿deseas comprarla? si/no');
            if(precioPrenda.toLowerCase() === 'si'){
                carrito.push(10000);
            }
            break;
        // salida del bucle
        case 'salir':
            alert('Buena eleccion!');
            break;
        default:
            alert("No se encuentra disponible esa prenda.");
            continue; // volver al inicio del bucle si no es valido.
    }
}

console.log(carrito);
let totalProductos = carrito.length ; //cantidad de productos del (array) carrito asignada a una variable.
let precioTotal = carrito.reduce((total, precio) => total + precio, 0); // metodo para sumar todos los productos del carrito.
alert('Cantidad de productos: ' + totalProductos + '\nPrecio total: $' + precioTotal);

// calcular precio final

let calcIva = (value) => value * 0.21; // declarando una variable y asignandole una funcion flecha que calcula el iva.

function realizarCompra(precioTotal) { // creando funcion que calcule el precio total.
    let final = prompt('¿Desea realizar la compra? Le ofrecemos un descuento! Si/No');
    if (final.toLowerCase() === 'si') {
        function calcularPrecioFinal(precioBase, fn, descuentoPorcentaje) { // creando funcion para luego pasarle argumentos.
            if (isNaN(precioBase) || precioBase < 0) {
                alert("Precio inválido");
                return; // Detener la ejecución 
            }
           // Descuento
            const descuento = precioBase * (descuentoPorcentaje / 100);
            const precioConDescuento = precioBase - descuento;

            // Impuesto
            const precioConIva = fn(precioConDescuento); //calculando precio con funcion por parametro y asignandolo a la constante.

            // Precio final
            const precioFinal = precioConDescuento + precioConIva;

            // Return del precio final
            return precioFinal;
}
        
        let descuentoPorcentaje = 20; // variable de descuento con valor asignado

        const precioFinalProducto = calcularPrecioFinal(precioTotal, calcIva, descuentoPorcentaje); // llamando a la funcion, pasandole los argumentos y asignando su return a la constante.

        // Resultado final
        if (precioFinalProducto !== undefined) {
            // Mostrar solo si el precio final es valido
            alert("Precio final del producto: " + precioFinalProducto + ' $');
            alert("¡Vuelva pronto! :D");
            console.log('su precio final por consola es: $'+ precioFinalProducto);
            fechaDeCompra();
        }
    } else {
        alert('Gracias por visitarnos, vuelva pronto!');
    }
}

// Llamando a la función para iniciar la compra pasando precioTotal como argumento.

realizarCompra(precioTotal);
function fechaDeCompra() {
    let tiempoActual = new Date(); //  llamando la clase 'Date' para ver la fecha y hora actual.
    let fechaHoraFormateada = tiempoActual.toLocaleDateString('es-ES'); // utilizando el metodo para mostrar en español.
    alert('Pago realizado el: ' + fechaHoraFormateada);
}












