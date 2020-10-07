import { Model } from 'mongoose';
import { PacientesSchemaI } from 'src/model/pacientes.schema';
export declare class GeneralService {
    private pacientesModel;
    constructor(pacientesModel: Model<PacientesSchemaI>);
    searchOne(id_res: any): Promise<PacientesSchemaI>;
    searchAll(): Promise<PacientesSchemaI[]>;
    updateOne(): Promise<string>;
}
