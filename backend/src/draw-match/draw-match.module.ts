import { Module } from '@nestjs/common';
import { DrawMatchService } from './draw-match.service';
import { DrawMatchController } from './draw-match.controller';

@Module({
  controllers: [DrawMatchController],
  providers: [DrawMatchService],
})
export class DrawMatchModule {}
