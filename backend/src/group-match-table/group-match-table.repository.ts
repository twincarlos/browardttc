import { Injectable } from '@nestjs/common';
import {
  eventGroup,
  groupMatch,
  groupMatchTable,
  groupPlayer,
  tournamentTable,
} from 'src/db/schema';
import { db } from 'src';
import { CreateGroupMatchTableDto } from './dto/create-group-match-table.dto';
import { eq, or } from 'drizzle-orm';
import { UpdateGroupMatchTableDto } from './dto/update-group-match-table.dto';

@Injectable()
export class GroupMatchTableRepository {
  async create(dto: CreateGroupMatchTableDto) {
    const [created] = await db.insert(groupMatchTable).values(dto).returning();
    return created;
  }

  async findAllByTournamentId(tournament_id: number) {
    return db
      .select()
      .from(groupMatchTable)
      .innerJoin(
        tournamentTable,
        eq(groupMatchTable.tournament_table_id, tournamentTable.id),
      )
      .where(eq(tournamentTable.tournament_id, tournament_id));
  }

  async findAllByTournamentEventId(tournament_event_id: number) {
    return db
      .select()
      .from(groupMatchTable)
      .innerJoin(groupMatch, eq(groupMatchTable.group_match_id, groupMatch.id))
      .innerJoin(
        groupPlayer,
        or(
          eq(groupMatch.group_player1_id, groupPlayer.id),
          eq(groupMatch.group_player2_id, groupPlayer.id),
        ),
      )
      .innerJoin(eventGroup, eq(groupPlayer.event_group_id, eventGroup.id))
      .where(eq(eventGroup.tournament_event_id, tournament_event_id));
  }

  async findOne(id: number) {
    const rows = await db
      .select()
      .from(groupMatchTable)
      .where(eq(groupMatchTable.id, id));
    return rows[0];
  }

  async update(id: number, dto: UpdateGroupMatchTableDto) {
    const [updated] = await db
      .update(groupMatchTable)
      .set(dto)
      .where(eq(groupMatchTable.id, id))
      .returning();
    return updated;
  }

  async remove(id: number) {
    await db
      .delete(groupMatchTable)
      .where(eq(groupMatchTable.id, id))
      .returning();
    return id;
  }
}
