/*
1. Stock de mercadería
2. Crear un constructor para los nuevos productos
3. Subir productos nuevos 
          ---------------------- mediante un Form
4. Buscar un producto 
----------------------con un Input
5. LocalStorage

*/



// 1. Stock de mercadería
let baseDatosMercaderia = [
    { id: "123", tipo: "remera", talle: "M", cantidad: 2, precioCosto: 5200 },
    { id: "123", tipo: "remera", talle: "L", cantidad: 2, precioCosto: 5200 },
    { id: "A456", tipo: "buzo", talle: "L", cantidad: 5, precioCosto: 16000 },
    { id: "B789", tipo: "pantalón", talle: "S", cantidad: 1, precioCosto: 18000 },
]


// 2. Constructor de productos
// 3. Productos ingresados en el Form
function formularioDeCarga(e) {
    e.preventDefault();
    let id = document.querySelector("#id-carga").value
    let tipo = document.querySelector("#tipo-carga").value
    let talle = document.querySelector("#talle-carga").value
    let cantidad = Number(document.querySelector("#cantidad-carga").value)
    let precioCosto = Number(document.querySelector("#precio-carga").value)
    const producto = { id, tipo, talle, cantidad, precioCosto }
    baseDatosMercaderia.push(producto)
    //return baseDatosMercaderia;
    console.table(baseDatosMercaderia)

}

const cargaNuevoProducto = document.querySelector("#formulario-carga");
cargaNuevoProducto.addEventListener("submit", formularioDeCarga);




// 4. Buscar un producto por ID
function validarForm(e) {
    e.preventDefault();
    let IDbuscado = document.querySelector("#id-busqueda").value.toUpperCase();
    let resultado = baseDatosMercaderia.filter((producto) => producto.id.toUpperCase().includes(IDbuscado))
    if (resultado.length > 0) {
        for (const busqueda of resultado) {
            const espacio = document.getElementById("tabla-resultados")
            let tabla = document.createElement("div")
            tabla.innerHTML = `<table>
                          <tr>
                          <td>${busqueda.id}</td>
                          <td>${busqueda.tipo}</td>
                          <td>${busqueda.talle}</td>
                          <td>${busqueda.precioCosto}</td>
                          </tr>
                          </table>`
            espacio.appendChild(tabla)
        }

    }
}

const busquedaID = document.querySelector("#formulario-busqueda");
busquedaID.addEventListener("submit", validarForm);


// 5. LocalStorage
localStorage.setItem("mensaje", "Utilice este programa para subir y/o buscar productos")
let mensaje = localStorage.getItem("mensaje")
alert(mensaje)

formularioDeCarga
