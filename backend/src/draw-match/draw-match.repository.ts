import { Injectable } from '@nestjs/common';
import {
  drawMatch,
  eventDraw,
  tournamentEvent,
} from 'src/db/schema';
import { db } from 'src';
import { CreateDrawMatchDto } from './dto/create-draw-match.dto';
import { eq } from 'drizzle-orm';
import { UpdateDrawMatchDto } from './dto/update-draw-match.dto';

@Injectable()
export class DrawMatchRepository {
  async create(dto: CreateDrawMatchDto) {
    const [created] = await db.insert(drawMatch).values(dto).returning();
    return created;
  }

  async findAllByTournamentId(tournament_id: number) {
    return db
      .select()
      .from(drawMatch)
      .innerJoin(eventDraw, eq(drawMatch.event_draw_id, eventDraw.id))
      .innerJoin(tournamentEvent, eq(eventDraw.tournament_event_id, tournamentEvent.id))
      .where(eq(tournamentEvent.tournament_id, tournament_id));
  }

  async findAllByTournamentEventId(tournament_event_id: number) {
    return db
      .select()
      .from(drawMatch)
      .innerJoin(eventDraw, eq(drawMatch.event_draw_id, eventDraw.id))
      .where(eq(eventDraw.tournament_event_id, tournament_event_id));
  }

  async findOne(id: number) {
    const rows = await db.select().from(drawMatch).where(eq(drawMatch.id, id));
    return rows[0];
  }

  async update(id: number, dto: UpdateDrawMatchDto) {
    const [updated] = await db
      .update(drawMatch)
      .set(dto)
      .where(eq(drawMatch.id, id))
      .returning();
    return updated;
  }

  async remove(id: number) {
    await db.delete(drawMatch).where(eq(drawMatch.id, id)).returning();
    return id;
  }
}
