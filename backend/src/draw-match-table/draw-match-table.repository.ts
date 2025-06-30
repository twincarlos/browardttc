import { Injectable } from '@nestjs/common';
import {
  drawMatch,
  drawMatchTable,
  drawPlayer,
  eventDraw,
  tournamentTable,
} from 'src/db/schema';
import { db } from 'src';
import { CreateDrawMatchTableDto } from './dto/create-draw-match-table.dto';
import { UpdateDrawMatchTableDto } from './dto/update-draw-match-table.dto';
import { eq } from 'drizzle-orm';

@Injectable()
export class DrawMatchTableRepository {
  async create(dto: CreateDrawMatchTableDto) {
    const [created] = await db.insert(drawMatchTable).values(dto).returning();
    return created;
  }

  async findAllByTournamentId(tournament_id: number) {
    return db
      .select()
      .from(drawMatchTable)
      .innerJoin(
        tournamentTable,
        eq(drawMatchTable.tournament_table_id, tournamentTable.id),
      )
      .where(eq(tournamentTable.tournament_id, tournament_id));
  }

  async findAllByTournamentEventId(tournament_event_id: number) {
    return db
      .select()
      .from(drawMatchTable)
      .innerJoin(drawMatch, eq(drawMatchTable.draw_match_id, drawMatch.id))
      .innerJoin(drawPlayer, eq(drawMatch.draw_player1_id, drawPlayer.id))
      .innerJoin(eventDraw, eq(drawPlayer.event_draw_id, eventDraw.id))
      .where(eq(eventDraw.tournament_event_id, tournament_event_id));
  }

  async findOne(id: number) {
    const rows = await db
      .select()
      .from(drawMatchTable)
      .where(eq(drawMatchTable.id, id));
    return rows[0];
  }

  async update(id: number, dto: UpdateDrawMatchTableDto) {
    const [updated] = await db
      .update(drawMatchTable)
      .set(dto)
      .where(eq(drawMatchTable.id, id))
      .returning();
    return updated;
  }

  async remove(id: number) {
    await db
      .delete(drawMatchTable)
      .where(eq(drawMatchTable.id, id))
      .returning();
    return id;
  }
}
