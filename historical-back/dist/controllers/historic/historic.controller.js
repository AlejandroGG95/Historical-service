"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoricController = void 0;
const common_1 = require("@nestjs/common");
const general_service_1 = require("../../services/general/general.service");
let HistoricController = class HistoricController {
    constructor(generalService) {
        this.generalService = generalService;
    }
    searchOne(param) {
        console.log("Se ha recibido este id: ", param.id);
        return this.generalService.searchOne(param.id);
    }
    searchAll() {
        return this.generalService.searchAll();
    }
};
__decorate([
    common_1.Post("searchOne"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HistoricController.prototype, "searchOne", null);
__decorate([
    common_1.Get("searchAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HistoricController.prototype, "searchAll", null);
HistoricController = __decorate([
    common_1.Controller('historic'),
    __metadata("design:paramtypes", [general_service_1.GeneralService])
], HistoricController);
exports.HistoricController = HistoricController;
//# sourceMappingURL=historic.controller.js.map