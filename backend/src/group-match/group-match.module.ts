import { Module } from '@nestjs/common';
import { GroupMatchService } from './group-match.service';
import { GroupMatchController } from './group-match.controller';

@Module({
  controllers: [GroupMatchController],
  providers: [GroupMatchService],
})
export class GroupMatchModule {}
