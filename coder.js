const nombreUsuario = prompt('Ingrese su nombre');
const apellidoUsuario = prompt('Ingrese su apellido');
const edadUsuario = Number(prompt('Ingresa tu edad'));
// login del usuario

if (typeof nombreUsuario === 'string' && typeof apellidoUsuario === 'string' && !isNaN(edadUsuario) && edadUsuario >= 18) {
        alert("Puedes ingresar a tu cuenta");
    } else if (typeof nombreUsuario === 'number' || typeof apellidoUsuario === 'number') {
        alert('Ingresa un nombre válido');
    } else if (isNaN(edadUsuario)) {
        alert('Ingresa un nombre y una edad válida');
    } else {
        const añosFaltantes = 18 - edadUsuario;
        alert('Te faltan ' + añosFaltantes + ' años para registrarte');
    }

// bucle 
let ropa;
while (ropa != 0) {
    let prenda = prompt('Ingrese la prenda que le interesa y le diremos su precio \n "remera" \n "pantalon" \n "zapatillas" \n "buzo" \n "gorra" \n para salir ingrese la palabra salir.');
// opciones de ropa
    switch(prenda) {
        case 'remera':
            alert('la remera cuesta 9000');
        break;
        case 'pantalon':
            alert('el pantalon cuesta 45000');
        break;
        case 'zapatillas':
            alert('las zapatillas cuestan 189000');
        break;
        case 'buzo':
            alert('el buzo cuesta 83000');
        break;
        case 'gorra':
            alert('la gorra cuesta 12000');
        break;
        // salida del bucle
        case 'salir':
            alert('esperamos que le haya gustado, si quiere puede consultar el precio final. Gracias!');
            ropa = 0;
        break;
        default:
            alert("no se encuentra disponible esa prenda.");
        continue; 
        // volver al inicio del bucle si no es valido.
    }
}

// calcular precio final
function calcularPrecioFinal(precioBase, impuestoPorcentaje, descuentoPorcentaje) {
    if (isNaN(precioBase) || precioBase < 0) {
        alert("precio inválido");
        return; // Detener la ejecución 
    }
    // impuesto
    const impuesto = precioBase * (impuestoPorcentaje / 100);

    // descuento
    const descuento = precioBase * (descuentoPorcentaje / 100);

    // precio final
    const precioFinal = precioBase + impuesto - descuento;

    // return de precio final
    return precioFinal;
}

// asignando un precio base a una variable
let precioBaseProducto = Number(prompt('anote el precio del producto y le calculamos el precio final con descuento. ;)'));
let impuestoPorcentaje = 10;
let descuentoPorcentaje = 20;
// utilizando la funcion para que se ejecute en torno a la variable que el usuario le asigna el precio base, calcula el precio final y lo guarda en otra nueva variable 
const precioFinalProducto = calcularPrecioFinal(precioBaseProducto, impuestoPorcentaje, descuentoPorcentaje);

// resultado final
if (precioFinalProducto !== undefined) {
    // Mostrar solo si el precio final es valido
    alert("precio final del producto: " + precioFinalProducto + ' $');
}








