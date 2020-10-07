import { Module } from '@nestjs/common';
/* import { Mongoose } from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service'; */
import { HistoricController } from './historic.controller';
import { GeneralService } from '../../services/general/general.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PacientesSchema } from 'src/model/pacientes.schema';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/nest', { useFindAndModify: false }),
        MongooseModule.forFeature([{ name: 'pacientes', schema: PacientesSchema }])
    ],
    controllers: [HistoricController],
    providers: [GeneralService],
})
export class HistoricModule { }
