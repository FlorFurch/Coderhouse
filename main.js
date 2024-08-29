
    const listaDeProductos = []


    function cargarProductos(){
        let id = prompt("ID del producto")
        const tipo = prompt("Ingrese tipo de prenda:")
        const color = prompt("Ingrese color de la prenda:")
        const precioCostoSinIva = prompt("Precio costo de la prenda, sin IVA")
        const precioCostoConIVA = precioCostoSinIva*1.21;
        const producto = {id, tipo, color, precioCostoSinIva, precioCostoConIVA}
        listaDeProductos.push(producto)
        return listaDeProductos;
    } 
    
    
    function repetir(){
        let mensaje = confirm("Cargar otro producto?")
        while (mensaje){
            cargarProductos()
            mensaje = confirm("Cargar otro producto?");}
    }
    
    
    function carga(){
        cargarProductos()
        repetir()
    }
    
    
    carga()
    console.table(listaDeProductos)
    