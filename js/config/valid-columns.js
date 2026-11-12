
// Columnas validas que seran permitidas 
const columns = {
  id: "ID", tipo: "Tipo", monto: "Monto", fecha: "Fecha", categoria: "Categoría",
  metodoPago: "Metodo de pago", cuenta: "Cuenta", establecimiento: "Establecimiento",
  nombre: "Nombre", descripcion: "Descripción"
}

// Congelar el "objeto" para que no se pueda setear
export const valid_columns = Object.freeze(columns)


