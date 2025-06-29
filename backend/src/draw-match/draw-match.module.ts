import { Module } from '@nestjs/common';
import { DrawMatchService } from './draw-match.service';
import { DrawMatchController } from './draw-match.controller';
import { DrawMatchRepository } from './draw-match.repository';

@Module({
  controllers: [DrawMatchController],
  providers: [DrawMatchService, DrawMatchRepository],
})
export class DrawMatchModule {}
