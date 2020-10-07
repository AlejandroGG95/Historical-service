import { GeneralService } from '../../services/general/general.service';
export declare class HistoricController {
    private generalService;
    constructor(generalService: GeneralService);
    searchOne(param: any): Promise<import("../../model/pacientes.schema").PacientesSchemaI>;
    searchAll(): Promise<import("../../model/pacientes.schema").PacientesSchemaI[]>;
}
