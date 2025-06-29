import { Module } from '@nestjs/common';
import { DrawPlayerService } from './draw-player.service';
import { DrawPlayerController } from './draw-player.controller';
import { DrawPlayerRepository } from './draw-player.repository';

@Module({
  controllers: [DrawPlayerController],
  providers: [DrawPlayerService, DrawPlayerRepository],
})
export class DrawPlayerModule {}
