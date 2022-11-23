import { Module } from '@nestjs/common';
import { FloresService } from './flores.service';
import { FloresController } from './flores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flore } from './entities/flore.entity';

@Module({
  controllers: [FloresController],
  providers: [FloresService],
  imports: [TypeOrmModule.forFeature([Flore])],
})
export class FloresModule {}
