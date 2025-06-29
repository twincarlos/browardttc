import { Module } from '@nestjs/common';
import { DrawPlayerService } from './draw-player.service';
import { DrawPlayerController } from './draw-player.controller';

@Module({
  controllers: [DrawPlayerController],
  providers: [DrawPlayerService],
})
export class DrawPlayerModule {}
