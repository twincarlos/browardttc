import { Injectable } from '@nestjs/common';
import { CreateTournamentEventDto } from './dto/create-tournament-event.dto';
import { tournamentEvent } from 'src/db/schema';
import { db } from 'src';
import { eq } from 'drizzle-orm';
import { UpdateTournamentEventDto } from './dto/update-tournament-event.dto';

@Injectable()
export class TournamentEventRepository {
  async create(dto: CreateTournamentEventDto) {
    const [created] = await db.insert(tournamentEvent).values(dto).returning();
    return created;
  }

  async findAllByTournamentId(tournament_id: number) {
    return db
      .select()
      .from(tournamentEvent)
      .where(eq(tournamentEvent.tournament_id, tournament_id));
  }

  async findOne(id: number) {
    const rows = await db
      .select()
      .from(tournamentEvent)
      .where(eq(tournamentEvent.id, id));
    return rows[0];
  }

  async update(id: number, dto: UpdateTournamentEventDto) {
    const [updated] = await db
      .update(tournamentEvent)
      .set(dto)
      .where(eq(tournamentEvent.id, id))
      .returning();
    return updated;
  }

  async remove(id: number) {
    await db
      .delete(tournamentEvent)
      .where(eq(tournamentEvent.id, id))
      .returning();
    return id;
  }
}
