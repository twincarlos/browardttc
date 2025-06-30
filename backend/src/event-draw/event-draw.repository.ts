import { Injectable } from '@nestjs/common';
import { eventDraw, tournamentEvent } from 'src/db/schema';
import { db } from 'src';
import { CreateEventDrawDto } from './dto/create-event-draw.dto';
import { eq } from 'drizzle-orm';
import { UpdateEventDrawDto } from './dto/update-event-draw.dto';

@Injectable()
export class EventDrawRepository {
  async create(dto: CreateEventDrawDto) {
    const [created] = await db.insert(eventDraw).values(dto).returning();
    return created;
  }

  async findAllByTournamentId(tournament_id: number) {
    return db
      .select()
      .from(eventDraw)
      .innerJoin(
        tournamentEvent,
        eq(eventDraw.tournament_event_id, tournamentEvent.id),
      )
      .where(eq(tournamentEvent.tournament_id, tournament_id));
  }

  async findAllByTournamentEventId(tournament_event_id: number) {
    return db
      .select()
      .from(eventDraw)
      .where(eq(eventDraw.tournament_event_id, tournament_event_id));
  }

  async findOne(id: number) {
    const rows = await db.select().from(eventDraw).where(eq(eventDraw.id, id));
    return rows[0];
  }

  async update(id: number, dto: UpdateEventDrawDto) {
    const [updated] = await db
      .update(eventDraw)
      .set(dto)
      .where(eq(eventDraw.id, id))
      .returning();
    return updated;
  }

  async remove(id: number) {
    await db.delete(eventDraw).where(eq(eventDraw.id, id)).returning();
    return id;
  }
}
