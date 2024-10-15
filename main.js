/*
1. Stock de mercadería
2. Crear un constructor para los nuevos productos
3. Subir productos nuevos mediante un Form
4. Buscar un producto por ID
5. Abrir "Ver todos los productos en stock"
*/



// 1. Stock de mercadería
let baseDatosMercaderia = []
fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(data => {
        data.forEach(post => {
            let id = post.id;
            let tipo = post.title;
            let talle = post.category;
            let precioCosto = post.price;
            let precioTotal = precioCosto * 2;
            const producto = { id, tipo, talle, precioCosto, precioTotal }
            baseDatosMercaderia.push(producto)
            //Id y tipo de producto guardado en localstorage
            localStorage.setItem(id, tipo)
            let usuario = localStorage.getItem(id)
            //listado de productos
            let listaDeProductos = document.querySelector(`#modal`)
            let tabla = document.createElement("div")
            tabla.innerHTML = `<table>
                          <tr>
                          <td class="td-id">${post.id}</td>
                          <td class="td-tipo">${post.title}</td>
                          <td class="td-categoria">${post.category}</td>
                          <td class="td-costo">${post.price}</td>
                          <td class="td-total">${precioTotal}</td>
                          </tr>
                          </table>`
            listaDeProductos.appendChild(tabla)
            return tabla
        })
    })

// 2. Constructor de productos
// 3. Productos ingresados en el Form
function formularioDeCarga(e) {
    const cargaNuevoProducto = document.querySelector("#formulario-carga");
    e.preventDefault();
    let id = document.querySelector("#id-carga").value
    let tipo = document.querySelector("#tipo-carga").value
    let categoria = document.querySelector("#talle-carga").value
    let precioCosto = Number(document.querySelector("#precio-carga").value)
    let precioTotal = precioCosto * 2;
    const producto = { id, tipo, categoria, precioCosto }
    baseDatosMercaderia.push(producto);
    Swal.fire({
        position: "center",
        icon: "success",
        title: `El producto ${producto.tipo} fue cargado con éxito`,
        showConfirmButton: false,
        timer: 2500
    });
    let listaDeProductos = document.querySelector(`#modal`)
    let tabla = document.createElement("div")
    tabla.innerHTML = `<table>
                          <tr>
                          <td class="td-id">${producto.id}</td>
                          <td class="td-tipo">${producto.tipo}</td>
                          <td class="td-categoria">${producto.categoria}</td>
                          <td class="td-costo">${producto.precioCosto}</td>
                          <td class="td-total">${precioTotal}</td>
                          </tr>
                          </table>`
    listaDeProductos.appendChild(tabla)
    cargaNuevoProducto.reset();
}
const cargaNuevoProducto = document.querySelector("#formulario-carga");
cargaNuevoProducto.addEventListener("submit", formularioDeCarga);

// 4. Buscar un producto por ID
function validarForm(e) {
    const busquedaID = document.querySelector("#formulario-busqueda");
    e.preventDefault();
    let IDbuscado = document.querySelector("#id-busqueda").value.toUpperCase();
    let resultado = baseDatosMercaderia.filter((producto) => producto.id.toString().toUpperCase().includes(IDbuscado))
    if (resultado.length > 0) {
        const espacio = document.getElementById("tabla-resultados")
        let tabla = document.createElement("div")
        tabla.innerHTML = `<table>
                       <thead>
                      <tr>
                      <th class="td-id">ID</td>
                      <th class="td-tipo">Tipo de producto</th>
                      <th class="td-categoria">Categoría</th>
                      <th class="td-costo">Costo</th>
                      <th class="td-total">Precio</th>
                      </tr>
                      </thead>
                      </table>`
        espacio.appendChild(tabla)
        for (const busqueda of resultado) {
            const espacio = document.getElementById("tabla-resultados")
            let tabla = document.createElement("div")
            precioTotal = busqueda.precioCosto * 2
            tabla.innerHTML = `<table>
                          <tr>
                          <td class="td-id">${busqueda.id}</td>
                          <td class="td-tipo">${busqueda.tipo}</td>
                          <td class="td-costo">${busqueda.categoria}</td>
                          <td class="td-costo">${busqueda.precioCosto}</td>
                          <td class="td-total">${precioTotal}</td>
                          </tr>
                          </table>`
            espacio.appendChild(tabla)
        }
    }
    busquedaID.reset();
}
const busquedaID = document.querySelector("#formulario-busqueda");
busquedaID.addEventListener("submit", validarForm);
busquedaID.reset();

// 5. Mostrar todos los productos en stock
const abrirVentana = document.querySelector(`#ver-todos`);
const cerrarVentana = document.querySelector(`#cierre`)
const ventana = document.querySelector(`#modal`);
abrirVentana.addEventListener(`click`, () => {
    ventana.showModal();
})
cerrarVentana.addEventListener(`click`, () => {
    ventana.close();
})