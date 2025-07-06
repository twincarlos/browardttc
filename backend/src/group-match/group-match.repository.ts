import { Injectable } from '@nestjs/common';
import {
  eventGroup,
  groupMatch,
  tournamentEvent,
} from 'src/db/schema';
import { db } from 'src';
import { CreateGroupMatchDto } from './dto/create-group-match.dto';
import { UpdateGroupMatchDto } from './dto/update-group-match.dto';
import { eq, or } from 'drizzle-orm';

@Injectable()
export class GroupMatchRepository {
  async create(dto: CreateGroupMatchDto) {
    const [created] = await db.insert(groupMatch).values(dto).returning();
    return created;
  }

  async findAllByTournamentId(tournament_id: number) {
    return db
      .select()
      .from(groupMatch)
      .innerJoin(eventGroup, eq(groupMatch.event_group_id, eventGroup.id))
      .innerJoin(tournamentEvent, eq(eventGroup.tournament_event_id, tournamentEvent.id))
      .where(eq(tournamentEvent.tournament_id, tournament_id));
  }

  async findAllByTournamentEventId(tournament_event_id: number) {
    const rows = await db
      .select({ groupMatch })
      .from(groupMatch)
      .innerJoin(eventGroup, eq(groupMatch.event_group_id, eventGroup.id))
      .where(eq(eventGroup.tournament_event_id, tournament_event_id));
    return rows.map((row) => row.groupMatch);
  }

  async findOne(id: number) {
    const rows = await db
      .select()
      .from(groupMatch)
      .where(eq(groupMatch.id, id));
    return rows[0];
  }

  async update(id: number, dto: UpdateGroupMatchDto) {
    const [updated] = await db
      .update(groupMatch)
      .set(dto)
      .where(eq(groupMatch.id, id))
      .returning();
    return updated;
  }

  async remove(id: number) {
    await db.delete(groupMatch).where(eq(groupMatch.id, id)).returning();
    return id;
  }
}
