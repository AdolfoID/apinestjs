import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>, // Inyecta el repositorio aquí
  ) {}

  create(client: Client): Promise<Client> {
    return this.clientsRepository.save(client);
  }

  findAll(): Promise<Client[]> {
    return this.clientsRepository.find();
  }

  findOne(id: number): Promise<Client> {
    return this.clientsRepository.findOneBy({ id });
  }

  async update(id: number, client: Client): Promise<Client> {
    await this.clientsRepository.update(id, client);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.clientsRepository.delete(id);
  }
}
