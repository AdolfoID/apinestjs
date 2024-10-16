import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { Client } from './client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client])], // Aquí se registra la entidad Client
  providers: [ClientsService],
  controllers: [ClientsController],
})
export class ClientsModule {}
