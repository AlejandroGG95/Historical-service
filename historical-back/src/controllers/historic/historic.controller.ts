import { Body, Controller, Get, Post } from '@nestjs/common';
import { GeneralService } from '../../services/general/general.service'
@Controller('historic')
export class HistoricController {
    constructor(private generalService: GeneralService) { }

    @Post("searchOne")
    searchOne(@Body() param) {
        console.log("Se ha recibido este id: ", param.id);
        return this.generalService.searchOne(param.id);
    }

    @Get("searchAll")
    searchAll() {
        return this.generalService.searchAll();
    }
}
