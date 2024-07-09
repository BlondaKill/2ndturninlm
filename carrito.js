//Pagina de Talleres y Cursos 

let question = prompt('Desea conocer nuestra agenda de Talleres? \n(S-si / N-no)');


const talleres = [
    { id: 1, nombre: 'Registros Akashicos', categoria: 'o', precio: 150},
    { id: 2, nombre: 'Terapia con Pendulo', categoria: 'p', precio: 300},
    { id: 3, nombre: 'Reiki Nivel Inicial', categoria: 'op', precio: 250},
    { id: 4, nombre: 'Reiki Nivel Avanzado', categoria: 'op', precio: 150},
    { id: 5, nombre: 'Taller Flores de Bach', categoria: 'o', precio: 250},
  ];

const carrito = []

while (question == 'S') {
    let answer = prompt('1- Registros Akashicos\n2- Terapia con Pendulo\n3- Reiki Nivel Inicial\n4- Reiki Nivel Avanzado\n5- Taller Flores de Bach');
    if (answer == '1') {
        alert('Eligio Taller de Registros Akashicos');
    } else if (answer == '2') {
        alert('Eligio Taller de Terapia con Pendulo');
    } else if (answer == '3') {
        alert('Eligio Taller de Reiki Nivel Inicial');
    } else if (answer == '4') {
        alert('Eligio Taller de Reiki Nivel Avanzado');
    } else if (answer == '5') {
        alert('Eligio Taller de Flores de Bach');
    } else {
        alert('Tipo de Curso inexistente');
    }
    question = prompt('Desea cambiar el tipo de curso? (S-si / N-no)');
}

const catUsuario = parseInt(prompt('elige la categoria de tu taller: \n\n1 - presencial \n2 - online  \n3 - online y presencial').toLowerCase());

const buscarCategoria = (catUsuario) => {

switch (catUsuario) {
case 1:
return 'p';


case 2:
return 'o';


case 3:
return 'op';

}
}

const categoria = buscarCategoria(catUsuario) // devuelve a q categoria corresp

const productosFiltrados = talleres.filter(talleres => talleres.categoria === categoria)
console.log(productosFiltrados)

let mensaje = ''

productosFiltrados.forEach(s => {
mensaje += `${s.id} - ${s.nombre}\n`
})

console.log(mensaje);

const idProducto = parseInt(prompt('Ingresa el taller a comprar \n\n' + mensaje + '\n\n↩️ b (para volver al menu)'));

const producto = talleres.find(s => s.id === idProducto)


let total = +producto.precio;

if (talleres) {
alert('elegiste el taller ' + producto.nombre + ' $ ' + producto.precio)
switch (talleres) {
case 's.id === 3, 5':
sumatoriaCompra(250);
break;
case 's.id === 1, 4':
sumatoriaCompra(150);
break;

case 's.id === 2':
sumatoriaCompra(300);
break;

default:
break;
}


//==================================== Precios segun curso elegido ===================================

let total = 0;

let tallerA = prompt('Elija el tipo de taller:\n \n1 - Online\n2 - Presencial\n3 - Online y Presencial \n\n B / para volver al menu');

while (tallerA != 'B') {
    switch (tallerA) {
        case '1':
            alert('Su taller elegido vale $150 + IVA');
            sumatoriaCompra(160);
            break;
        case '2':
            alert('Su taller elegido vale $300 + IVA');
            sumatoriaCompra(300);
            break;
        case '3':
            alert('Su taller elegido vale $250 + IVA');
            sumatoriaCompra(250);
            break;
        case '4':
            alert('Su taller elegido vale $150 + IVA');
            sumatoriaCompra(150);
            break; 
        case '5':
            alert('Su taller elegido vale $250 + IVA');
            sumatoriaCompra(250);
            break;       

        default:
            alert('Registro Inexistente');
            break;

    }
    tallerA = prompt('Elija el taller :\n \n1 - Online\n2 - Presencial\n3 - Online y Presencial \n\nB / para volver al menu');
}

alert('Total de su compra $' + total);

question = prompt('Deseas seguir comprando? \n - y / yes\n - n / no');

while (question == 'n') {
alert ('Gracias por tu compra!');
break;
}
}

alert('El total de tu compra es $' + total);