import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PacientesSchemaI } from 'src/model/pacientes.schema';

@Injectable()
export class GeneralService {

    constructor(@InjectModel('pacientes') private pacientesModel: Model<PacientesSchemaI>,
    ) { }

    async searchOne(id_res) {
        /* return await this.pacientesModel.findOne({ name: "Alejandro", lastname: "García García" }).exec(); */
        return await this.pacientesModel.findOne({ _id: id_res }).exec();
    }

    async searchAll() {
        return await this.pacientesModel.find({});
    }

    async updateOne(){
        return "se ha actualizado"
    }
}
