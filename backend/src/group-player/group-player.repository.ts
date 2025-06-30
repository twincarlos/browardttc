import { Injectable } from '@nestjs/common';
import { eventGroup, tournamentEvent, groupPlayer } from 'src/db/schema';
import { db } from 'src';
import { CreateGroupPlayerDto } from './dto/create-group-player.dto';
import { UpdateGroupPlayerDto } from './dto/update-group-player.dto';
import { eq } from 'drizzle-orm';

@Injectable()
export class GroupPlayerRepository {
  async create(dto: CreateGroupPlayerDto) {
    const [created] = await db.insert(groupPlayer).values(dto).returning();
    return created;
  }

  async findAllByTournamentId(tournament_id: number) {
    return db
      .select()
      .from(groupPlayer)
      .innerJoin(eventGroup, eq(groupPlayer.event_group_id, eventGroup.id))
      .innerJoin(
        tournamentEvent,
        eq(eventGroup.tournament_event_id, tournamentEvent.id),
      )
      .where(eq(tournamentEvent.tournament_id, tournament_id));
  }

  async findAllByTournamentEventId(tournament_event_id: number) {
    return db
      .select()
      .from(groupPlayer)
      .innerJoin(eventGroup, eq(groupPlayer.event_group_id, eventGroup.id))
      .where(eq(eventGroup.tournament_event_id, tournament_event_id));
  }

  async findOne(id: number) {
    const rows = await db
      .select()
      .from(groupPlayer)
      .where(eq(groupPlayer.id, id));
    return rows[0];
  }

  async update(id: number, dto: UpdateGroupPlayerDto) {
    const [updated] = await db
      .update(groupPlayer)
      .set(dto)
      .where(eq(groupPlayer.id, id))
      .returning();
    return updated;
  }

  async remove(id: number) {
    await db.delete(groupPlayer).where(eq(groupPlayer.id, id)).returning();
    return id;
  }
}
