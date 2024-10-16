import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from './clients/clients.module';
import { Client } from './clients/client.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root94',
      database: 'clientesdb',
      entities: [Client], // Aquí se debe incluir la entidad Client
      synchronize: false,
    }),
    ClientsModule,
  ],
})
export class AppModule {}
