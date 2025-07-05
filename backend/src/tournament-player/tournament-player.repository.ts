import { Injectable } from '@nestjs/common';
import { CreateTournamentPlayerDto } from './dto/create-tournament-player.dto';
import { eventPlayer, tournamentPlayer } from 'src/db/schema';
import { db } from 'src';
import { eq } from 'drizzle-orm';
import { UpdateTournamentPlayerDto } from './dto/update-tournament-player.dto';

@Injectable()
export class TournamentPlayerRepository {
  async create(dto: CreateTournamentPlayerDto) {
    const [created] = await db.insert(tournamentPlayer).values(dto).returning();
    return created;
  }

  async findAllByTournamentId(tournament_id: number) {
    return db
      .select()
      .from(tournamentPlayer)
      .where(eq(tournamentPlayer.tournament_id, tournament_id));
  }

  async findAllByTournamentEventId(tournament_event_id: number) {
    const rows = await db
      .select({ tournamentPlayer })
      .from(tournamentPlayer)
      .innerJoin(
        eventPlayer,
        eq(tournamentPlayer.id, eventPlayer.tournament_player_id),
      )
      .where(eq(eventPlayer.tournament_event_id, tournament_event_id));

    return rows.map((row) => row.tournamentPlayer);
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
