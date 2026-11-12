import { valid_columns } from "../config/valid-columns.js";


export function columnFilter() {
    console.log("[Filtro de columnas activo]")

    // Establacimiento de columnas de manera manual
    const keysToKeep = ['id', 'tipo', 'nombre', 'monto', 'fecha']

    // Se filtra para conservar las keys válidas sin transformar a texto visible aun
    /* const validKeys = keysToKeep.filter(key => key in valid_columns) */

    const validKeys = Object.keys(valid_columns)

    const fieldset = document.querySelector("#filters-columns")


    validKeys.forEach((key => {
        // Checkbox INPUT
        const checkboxInput = document.createElement("input")
        checkboxInput.setAttribute("type", "checkbox")
        checkboxInput.id = valid_columns[key]
        fieldset.appendChild(checkboxInput)

        // Ckeck de las columnas por defecto
        if (keysToKeep.includes(key)) {
            checkboxInput.checked = true // <-- Por defecto marcado
        }

        // Checkbox Label
        const checkoxLabel = document.createElement("label")
        checkoxLabel.htmlFor = valid_columns[key]
        checkoxLabel.textContent = valid_columns[key]
        fieldset.appendChild(checkoxLabel)



    }))
}