import { Module } from '@nestjs/common';
import { GroupPlayerService } from './group-player.service';
import { GroupPlayerController } from './group-player.controller';

@Module({
  controllers: [GroupPlayerController],
  providers: [GroupPlayerService],
})
export class GroupPlayerModule {}
