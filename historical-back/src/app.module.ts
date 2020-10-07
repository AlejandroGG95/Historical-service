import { Module } from '@nestjs/common';
import { HistoricController } from './controllers/historic/historic.controller';
import { GeneralService } from './services/general/general.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PacientesSchema, PacientesSchemaI } from './model/pacientes.schema';
import { HistoricModule } from './controllers/historic/historic.module';



@Module({
  imports: [HistoricModule,
    MongooseModule.forRoot('mongodb://localhost/nest', { useFindAndModify: false }),
    MongooseModule.forFeature([{ name: 'pacientes', schema: PacientesSchema }])],
  controllers: [HistoricController],
  providers: [GeneralService],
})
export class AppModule { }
