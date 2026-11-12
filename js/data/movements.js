
console.log("[Movimientos detectados]")

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

export const movements = [movimiento_uno, movimiento_dos]

