export function data(){
    console.log("FinTrack iniciado")

const movimiento_uno = {
  id: 1,
  tipo: "GASTO",
  monto: 50000,
  fecha: "2026-09-24", // Formato ISO recomendado para fechas
  categoria: "Videojuego",
  metodoPago: "Débito",
  cuenta: "Santander Cuenta Corriente",
  establecimiento: "Steam",
  nombre: "Doom Eternal",
  descripcion: "Compra del videojuego"
};

const movimiento_dos = {
  id: 2,
  tipo: "INGRESO",
  monto: 1200000,
  fecha: "2026-09-24", // Mismo formato de fecha (Año-Mes-Día)
  categoria: "Sueldo",
  metodoPago: "Transferencia",
  cuenta: "Santander Cuenta Corriente",
  establecimiento: "Empresa Tech S.A.",
  nombre: "Pago de Remuneración",
  descripcion: "Depósito del sueldo mensual correspondiente a septiembre"
};

const movimientos = [movimiento_uno, movimiento_dos]

// Columnas validas que seran permitidas 
const valid_columns = {
  id: "ID", tipo: "Tipo", monto: "Monto", fecha: "Fecha", categoria: "Categoría",
  metodoPago: "Metodo de pago", cuenta: "Cuenta", establecimiento: "Establecimiento",
  nombre: "Nombre", descripcion: "Descripción"
}

// Congelar el "objeto" para que no se pueda setear
Object.freeze(valid_columns)



/* COLUMNAS TH */
// Establacimiento de columnas de manera manual
const keysToKeep = ['id', 'tipo', 'nombre', 'monto', 'fecha']

// 1. Se FILTRA para conservar las keys válidas sin transformar a texto visible aún
const validKeys = keysToKeep.filter(key => key in valid_columns)

const table = document.querySelector("#table")
const column = table.querySelector("#columns")

// 2. se usa validKeys y se obtiene el nombre visible desde valid_columns[key]
validKeys.forEach((key) => {
  const newColumn = document.createElement("th")

  newColumn.textContent = valid_columns[key]

  column.appendChild(newColumn)
})



/* CREAR UNA COPIA DE movimientos pero que solo tenga las misma columnas (keys) del valid_colum */

const data = movimientos.map(movimiento =>
  Object.fromEntries(
    validKeys.map(key => [key, movimiento[key]])
  )
);


/* FILAS TR y TD */
const table_body = table.querySelector("#table_body")

data.forEach((data) => {

  //Creación de la fila para el movimiento
  const newTableRow = document.createElement("tr")

  // 3. Recorremos únicamente las validKeys en lugar de keysToKeep
  validKeys.forEach((key) => {
    
    // Recorrido de manera visual en la consola:
    // console.log(key)
    // console.log(data[key])

    const newCell = document.createElement("td")

    // Acceder al valor de la pripiedad dinámicamente
    newCell.textContent = data[key]

    // Meter la celda dentro de la fila
    newTableRow.appendChild(newCell)

  })

  // Meter la fila completa con todas sus celdas en el cuerpo de la tabla
  table_body.appendChild(newTableRow)

})
}