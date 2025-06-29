import { Injectable } from '@nestjs/common';
import { CreateTournamentPlayerDto } from './dto/create-tournament-player.dto';
import { tournamentPlayer } from 'src/db/schema';
import { db } from 'src';
import { eq } from 'drizzle-orm';
import { UpdateTournamentPlayerDto } from './dto/update-tournament-player.dto';

@Injectable()
export class TournamentPlayerRepository {
  async create(dto: CreateTournamentPlayerDto) {
    const [created] = await db.insert(tournamentPlayer).values(dto).returning();
    return created;
  }

  async findAll() {
    return db.select().from(tournamentPlayer);
  }

  async findOne(id: number) {
    const rows = await db
      .select()
      .from(tournamentPlayer)
      .where(eq(tournamentPlayer.id, id));
    return rows[0];
  }

  async update(id: number, dto: UpdateTournamentPlayerDto) {
    const [updated] = await db
      .update(tournamentPlayer)
      .set(dto)
      .where(eq(tournamentPlayer.id, id))
      .returning();
    return updated;
  }

  async remove(id: number) {
    await db
      .delete(tournamentPlayer)
      .where(eq(tournamentPlayer.id, id))
      .returning();
    return id;
  }
}
