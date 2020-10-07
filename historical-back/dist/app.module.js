"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const historic_controller_1 = require("./controllers/historic/historic.controller");
const general_service_1 = require("./services/general/general.service");
const mongoose_1 = require("@nestjs/mongoose");
const pacientes_schema_1 = require("./model/pacientes.schema");
const historic_module_1 = require("./controllers/historic/historic.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [historic_module_1.HistoricModule,
            mongoose_1.MongooseModule.forRoot('mongodb://localhost/nest', { useFindAndModify: false }),
            mongoose_1.MongooseModule.forFeature([{ name: 'pacientes', schema: pacientes_schema_1.PacientesSchema }])],
        controllers: [historic_controller_1.HistoricController],
        providers: [general_service_1.GeneralService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map