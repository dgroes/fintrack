# FinTrack 💰
App de JS crear para el tracking de los gatos personales

# Ficheros
## `js/app.js`
Punto de entrada, no debería saber los detalles de cómo se contruye una fila o cómo funciona un checkbox, conceptualmente sería algo así:
```js
app.js
   │
   ├── inicializa datos
   ├── inicializa tabla
   └── inicializa filtros
```
Es el director que enlaza todo y hace el arranque.
## `data\movements.js`
Aquí inicialmente están los datos de prueba:
```js
movimiento_uno
movimiento_dos
movimientos
```
ese sería un fichero con datos escritos manualmente, pero luego podrían estar con una API, localStorage, CSV, Excel
## `table/table.js`
Aquí está todo lo relacionado con mostrar movimientos en la tabla, por ejemplo:
```js
crear encabezados
crear filas
crear celdas
insertar elementos en <table>
```
Conceptualmente este fichero tiene que recibir los movimientos y pasarlos como tabla en el HTML
## `filtesr/column-filter.js`
Este sería el responsable de trabajar con los filtros a mostrar en la tabla. Ejemplo:
```css
☑ ID
☑ Tipo
☐ Categoría
☑ Monto
☑ Fecha
```
Su responsabilidad sería: crear checkboxes, detectar cambios, determinar qué columnas están seleccionadas. No se encarga de construir ninguna fila de la tabla.
Algo así:
```txt
column-filter.js
        ↓
"El usuario seleccionó estas columnas"
        ↓
      app.js
        ↓
table.js
        ↓
actualiza tabla
```
## `config/column.js`
Aquí estaría la cofinguración sobre que columnas se mostrarían, es un filtro para que se muestren solo las columnas que se necesitan, tentrían esta base:
```js
// Columnas validas que seran permitidas 
const valid_columns = {
  id: "ID", tipo: "Tipo", monto: "Monto", fecha: "Fecha", categoria: "Categoría",
  metodoPago: "Metodo de pago", cuenta: "Cuenta", establecimiento: "Establecimiento",
  nombre: "Nombre", descripcion: "Descripción"
}

// Congelar el "objeto" para que no se pueda setear
Object.freeze(valid_columns)
```