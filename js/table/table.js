import { movements } from "../data/movements.js"
import { valid_columns } from "../config/valid-columns.js"


export function table() {
    console.log("[Creación de tabla]")

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

    const data = movements.map(movement =>
        Object.fromEntries(
            validKeys.map(key => [key, movement[key]])
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
