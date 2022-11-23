import { Injectable } from '@nestjs/common';
import { CreateFloreDto } from './dto/create-flore.dto';
import { UpdateFloreDto } from './dto/update-flore.dto';
import { Flore } from './entities/flore.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FloresService {
  constructor(@InjectRepository(Flore) private floreRepository: Repository<Flore>) {
  }
  create(createFloreDto: CreateFloreDto) {
    return this.floreRepository.save(createFloreDto);
  }

  findAll() {
    return this.floreRepository.find();
  }

  findOne(id: number) {
    return this.floreRepository.findOneBy({ id });
  }

  update(id: number, updateFloreDto: UpdateFloreDto) {
    return this.floreRepository.update({ id }, updateFloreDto);
  }

  remove(id: number) {
    return this.floreRepository.delete({ id });
  }
}
