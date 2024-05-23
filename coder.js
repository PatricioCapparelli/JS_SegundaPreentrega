const nombreUsuario = prompt('Ingrese su nombre');
const apellidoUsuario = prompt('Ingrese su apellido');
const edadUsuario = Number(prompt('Ingresa tu edad'));
// login del usuario
if (typeof nombreUsuario === 'string' && typeof apellidoUsuario === 'string' && !isNaN(edadUsuario) && edadUsuario >= 18) {
    alert("Puedes ingresar a tu cuenta");
} else {
    if (isNaN(edadUsuario)) {
        alert('Ingresa un nombre y una edad válida');
    } else {
        const añosFaltantes = 18 - edadUsuario;
        alert('Te faltan ' + añosFaltantes + ' años para registrarte');
    }
}
// bucle 
let ropa;
while (ropa != 0) {
    let prenda = prompt('ingrese la prenda que le interesa y le diremos su precio \n remera \n pantalon \n zapatillas \n buzo \n gorra \n para salir ingrese la palabra salir');
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
        case 'salir':
            alert('esperamos que le haya gustado, vuelva pronto!');
            ropa = 0;
        break;
        default:
            alert("no se encuentra disponible esa prenda.");
    }
}
// calcular precio final
function calcularPrecioFinal(precioBase, impuestoPorcentaje, descuentoPorcentaje) {
    if (isNaN(precioBase)) {
        alert("Precio base inválido");
        return; // Detener la ejecución 
    }
    // impuesto
    const impuesto = precioBase * (impuestoPorcentaje / 100);

    // descuento
    const descuento = precioBase * (descuentoPorcentaje / 100);

    // precio final
    const precioFinal = precioBase + impuesto - descuento;

    // Return de precio final
    return precioFinal;
}

let precioBaseProducto = Number(prompt('elegi el precio del producto y te calculamos el precio final'));
const impuestoPorcentaje = 10;
const descuentoPorcentaje = 20;

const precioFinalProducto = calcularPrecioFinal(precioBaseProducto, impuestoPorcentaje, descuentoPorcentaje);

// Mostrar el resultado
if (precioFinalProducto !== undefined) {
    // Mostrar el resultado solo si el precio final es válido
    alert("Precio final del producto: " + precioFinalProducto + ' $');
}








