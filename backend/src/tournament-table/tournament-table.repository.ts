import { Injectable } from '@nestjs/common';
import { CreateTournamentTableDto } from './dto/create-tournament-table.dto';
import { tournamentTable } from 'src/db/schema';
import { db } from 'src';
import { eq } from 'drizzle-orm';
import { UpdateTournamentTableDto } from './dto/update-tournament-table.dto';

@Injectable()
export class TournamentTableRepository {
  async create(dto: CreateTournamentTableDto) {
    const [created] = await db.insert(tournamentTable).values(dto).returning();
    return created;
  }

  async findAllByTournamentId(tournament_id: number) {
    return db
      .select()
      .from(tournamentTable)
      .where(eq(tournamentTable.tournament_id, tournament_id));
  }

  async findOne(id: number) {
    const rows = await db
      .select()
      .from(tournamentTable)
      .where(eq(tournamentTable.id, id));
    return rows[0];
  }

  async update(id: number, dto: UpdateTournamentTableDto) {
    const [updated] = await db
      .update(tournamentTable)
      .set(dto)
      .where(eq(tournamentTable.id, id))
      .returning();
    return updated;
  }

  async remove(id: number) {
    await db
      .delete(tournamentTable)
      .where(eq(tournamentTable.id, id))
      .returning();
    return id;
  }
}
