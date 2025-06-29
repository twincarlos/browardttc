import { Module } from '@nestjs/common';
import { GroupMatchService } from './group-match.service';
import { GroupMatchController } from './group-match.controller';
import { GroupMatchRepository } from './group-match.repository';

@Module({
  controllers: [GroupMatchController],
  providers: [GroupMatchService, GroupMatchRepository],
})
export class GroupMatchModule {}
