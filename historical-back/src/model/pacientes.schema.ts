import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const PacientesSchema = new mongoose.Schema({
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

export interface PacientesSchemaI extends Document {
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
}