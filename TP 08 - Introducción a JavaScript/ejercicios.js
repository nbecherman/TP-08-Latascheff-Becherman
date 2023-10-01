function calculadoraEdad() {
    const fechaHoy = new Date();
    const nacimiento = document.getElementById('nacimiento').value;
    const fechaNacimiento = new Date(nacimiento);
    const nombre = document.getElementById('nombre').value;
    const resultado = fechaHoy.getFullYear() - fechaNacimiento.getFullYear();
    document.getElementById('resultado1').textContent = nombre + " tiene " + resultado + " años";
}

function tirandoFruta() {
    const frutas = ['cereza', 'ciruela', 'higo', 'manzana', 'melocotón', 'pera', 'banana', 'uva', 'frutilla', 'sandia'];
    const frutaElegida = document.getElementById('fruta').value.toLowerCase();
    if (frutas.includes(frutaElegida)) {
        document.getElementById('resultado2').textContent = "Sí, tenemos " + frutaElegida + "!";
    } else {
        document.getElementById('resultado2').textContent = "No, no tenemos " + frutaElegida + "!";
    }
}

function comparandoDatos() {
    const num = 10;
    const igual = num == '10';
    const dato = 10.6;
    console.log(typeof num);
    console.log(typeof dato);
}

function yoObjeto() {
    const ciudad = {
        nombre: "Montevideo",
        fechaFundacion: "0000-00-00",
        poblacion: 450000,
        extension: 450000
    };
    console.log(ciudad);
}

function elementos() {
    const arreglo = [0, 1, 2, 3, 4, 5];
    const arreglo2 = [];
    for (let i = 0; i < arreglo.length; i++) {
        arreglo2[i] = arreglo[i] * 2;
    }
    console.log(arreglo2);
}

function elemento() {
    const arreglo = [0, 1, 2, 3, 4, 5];
    const arreglo2 = arreglo.map(num => num * 2);
    console.log(arreglo2);
}

function piramide() {
    const asterisco = "*";
    let piramide = "";
    for (let num = 0; num < 5; num++) {
        piramide += asterisco.repeat(num) + "\n";
    }
    alert(piramide);
}

function coma() {
    const nombres = document.getElementById('nombres').value;
    const listaNombres = nombres.split(',');
    const nombresConA = listaNombres.filter(nombre => nombre.trim().toLowerCase().startsWith('a'));
    document.getElementById('resultado7').textContent = "Nombres que comienzan con 'A': " + nombresConA.join(', ');
}

function reemplazar() {
    const frase = document.getElementById('Texto').value;
    const palabra = document.getElementById('Reemplazar').value;
    const reemplazo = document.getElementById('Reemplazo').value;
    const fraseNueva = frase.replace(new RegExp(palabra, 'g'), reemplazo);
    document.getElementById('resultado8').textContent = "Texto modificado: " + fraseNueva;
}

function primerosCaracteres() {
    const texto = document.getElementById('texto').value;
    const numero = parseInt(document.getElementById('NumeroParaCortar').value);
    if (!isNaN(numero) && numero >= 0) {
        const primerosCaracteres = texto.substring(0, numero);
        document.getElementById('resultado9').textContent = "Primeros " + numero + " caracteres: " + primerosCaracteres;
    } else {
        document.getElementById('resultado9').textContent = "Ingrese un número válido";
    }
}

function guion() {
    const listaComa = document.getElementById('ListaComa').value;
    const listaGuion = listaComa.split(',').join(' - ');
    document.getElementById('resultado10').textContent = "Lista separada por guiones: " + listaGuion;
}

function recaudacion() {
    const pedidos = document.getElementById('ListaPrecios').value;
    const pedidosArray = pedidos.split(', ');
    let recaudacionTotal = 0;
    for (let i = 0; i < pedidosArray.length; i++) {
        const pedido = pedidosArray[i].split(':');
        if (pedido.length === 2) {
            const montoTotal = parseFloat(pedido[1]);
            
        }
        else{
            recaudacionTotal += montoTotal;
        }
    }
    document.getElementById('resultado11').textContent = "Recaudación total: " + recaudacionTotal.toFixed(2);
}
