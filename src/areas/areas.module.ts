import { TypeOrmModule } from '@nestjs/typeorm';
import { Area } from './entities/area.entity';
import { Module } from '@nestjs/common';
import { AreasService } from './areas.service';
import { AreasController } from './areas.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Area])],
  controllers: [AreasController],
  providers: [AreasService]
})
export class AreasModule {}
