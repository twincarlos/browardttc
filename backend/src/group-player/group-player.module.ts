import { Module } from '@nestjs/common';
import { GroupPlayerService } from './group-player.service';
import { GroupPlayerController } from './group-player.controller';
import { GroupPlayerRepository } from './group-player.repository';

@Module({
  controllers: [GroupPlayerController],
  providers: [GroupPlayerService, GroupPlayerRepository],
})
export class GroupPlayerModule {}
