"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacientesSchema = void 0;
const mongoose = require("mongoose");
exports.PacientesSchema = new mongoose.Schema({
    dni: String,
    name: String,
    lastname: String,
    edad: Number,
    fecha_nac: String,
    sexo: String,
    estado_civil: String,
    numero_ss: Number,
    email: String,
    habitacion: Number,
    fecha_ingr: String
});
//# sourceMappingURL=pacientes.schema.js.map